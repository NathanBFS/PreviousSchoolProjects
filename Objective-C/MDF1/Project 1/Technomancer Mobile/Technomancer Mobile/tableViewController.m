//
//  tableViewController.m
//  testApp
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "tableViewController.h"
#import "detailedViewController.h"
#import "CustomTableCell.h"

@interface tableViewController ()

@end

@implementation tableViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    titleArray = [[NSMutableArray alloc] initWithObjects:@"iPhone 5", @"Galaxy SIII", @"iPad", @"Galaxy Note 2", @"Droid Razr HD", @"Galaxy Nexus", @"Nexus 7", @"Macbook Pro", @"Alienware M14x", @"Macbook Air", @"Chromebook", @"Padfone 2", @"Lumia 920", @"One X", @"Galaxy Note 10.1", @"Vaio", @"Xyboard", @"Evo 4G LTE", @"J Butterfly", @"Nexus 4", nil];
    
    categoryArray = [[NSMutableArray alloc] initWithObjects:@"Smartphone", @"Smartphone", @"Tablet", @"Phablet", @"Smartphone", @"Smartphone", @"Tablet", @"Laptop", @"Laptop", @"Laptop", @"Laptop", @"Convertible Smartphone/Tablet", @"Smartphone", @"Smartphone", @"Tablet", @"Laptop", @"Tablet", @"Smartphone", @"Smartphone", @"Smartphone", nil];
    
    UITapGestureRecognizer *buttonTapped = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(onTap:)];
    
    if (buttonTapped != nil)
    {
        buttonTapped.numberOfTapsRequired = 1;
        [editButton addGestureRecognizer:buttonTapped];
    }
    
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

-(void)onTap:(UITapGestureRecognizer*)recognizer
{
    [theTableView setEditing:true];
}

-(void)viewWillAppear:(BOOL)animated
{
    leftSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    leftSwiper.direction = UISwipeGestureRecognizerDirectionLeft;
    [backSwipe addGestureRecognizer:leftSwiper];
    
    rightSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    rightSwiper.direction = UISwipeGestureRecognizerDirectionRight;
    [backSwipe addGestureRecognizer:rightSwiper];
    
    [super viewWillAppear:animated];
}


-(void)onSwipe:(UISwipeGestureRecognizer*)recognizer
{
    [self dismissViewControllerAnimated:TRUE completion:nil];//switches back to the first view
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return titleArray.count;
}

-(void)tableView:(UITableView*)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    detailedViewController *viewController = [[detailedViewController alloc]initWithNibName:@"detailedViewController" bundle:nil];
    
    if (viewController != nil)
    {
        [self presentViewController:viewController animated:TRUE completion:nil];
    }
}

-(void)tableView:(UITableView*)tableView2 commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete)
    {
        
        NSLog(@"delete row %d", indexPath.row);
        
        [titleArray removeObjectAtIndex:indexPath.row];
        
        [theTableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath]withRowAnimation:true];
        titleArray = titleArray;

    }
}

/*-(UITableViewCell *)tableView:(UITableView *)tableView2 cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil)
    {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
        NSArray* views = [[NSBundle mainBundle] loadNibNamed:@"CustomCell" owner:nil options:nil];
         
         for(UIView *view in views)
         {
         if([view isKindOfClass:[CustomTableCell class]])
         {
         cell = (CustomTableCell*)view;
         }
         }
        
    }
    
    cell.textLabel.text = (NSString*)[titleArray objectAtIndex:indexPath.row];
    
    return cell;
}*/

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
 
    CustomTableCell *cell = [theTableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil)
    {
        NSArray *views = [[NSBundle mainBundle] loadNibNamed:@"CustomCellView" owner:nil options:nil];
 
        for (UIView *view in views)
        {
            if([view isKindOfClass:[CustomTableCell class]])
            {
                cell = (CustomTableCell *)view;
                cell.titleLabel.text = (NSString *)[titleArray objectAtIndex:indexPath.row];
                cell.categoryLabel.text = (NSString *)[categoryArray objectAtIndex:indexPath.row];
            }
        }
    }
 
    return cell;
}

/*-(UITableViewCell *)tableView:(UITableView *)tableView2 cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"cell"; //one type of cell
 
    CustomTableCell* newCell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    
    if (newCell == nil) {
        NSArray* cellViews = [[NSBundle mainBundle] loadNibNamed:@"CustomCell" owner:nil options:nil];
        for (UIView* view in cellViews){
            if ([view isKindOfClass:[CustomTableCell class]]) {
                newCell = (CustomTableCell*)view;
            }
        }
    }
    
    descriptionArray = (NSMutableArray*)[titleArray allKeys]; //use array for indexing keys
    
    [newCell setText:[title objectAtIndex:indexPath.row] //header set to key
           withCount:[countObjects objectForKey:[descriptionArray objectAtIndex:indexPath.row]]]; //number count is in the value
    newCell.textLabel.text = (NSString*)[titleArray objectAtIndex:indexPath.row];
    
    return newCell;
}*/

/*-(UITableViewCell *)tableView:(UITableView *)tableView2 cellForRowAtIndexPath:(NSIndexPath *)indexPath
 {
 static NSString *CellIdentifier = @"Cell";
 
 CustomTableCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
 if (cell == nil)
 {
 cell = [[CustomTableCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
 NSArray* views = [[NSBundle mainBundle] loadNibNamed:@"CustomCell" owner:nil options:nil];
 
 for(UIView *view in views)
 {
 if([view isKindOfClass:[CustomTableCell class]])
 {
 cell = (CustomTableCell*)view;
 }
 }
 
 }
 
 cell.textLabel.text = (NSString*)[titleArray objectAtIndex:indexPath.row];
 
 return cell;
 }*/
@end
