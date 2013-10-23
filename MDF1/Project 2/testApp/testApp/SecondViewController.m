//
//  SecondViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "SecondViewController.h"
#import "CustomCellView.h"
#import "DetailViewController.h"

@interface SecondViewController ()

@end

@implementation SecondViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"/devices", @"/devices");
        //self.tabBarItem.image = [UIImage imageNamed:@"first"];
    }
    return self;
}

- (void)viewDidLoad
{
    titleArray = [[NSMutableArray alloc] initWithObjects:@"iPhone 5", @"Galaxy SIII", @"iPad", @"Galaxy Note 2", @"Droid Razr HD", @"Galaxy Nexus", @"Nexus 7", @"Macbook Pro", @"Alienware M14x", @"Macbook Air", @"Chromebook", @"Nexus 10", @"Lumia 920", @"One X", @"Galaxy Note 10.1", @"Surface RT", @"Xyboard", @"Evo 4G LTE", @"J Butterfly", @"Nexus 4", nil];
    
    categoryArray = [[NSMutableArray alloc] initWithObjects:@"Smartphone", @"Smartphone", @"Tablet", @"Phablet", @"Smartphone", @"Smartphone", @"Tablet", @"Laptop", @"Laptop", @"Laptop", @"Laptop", @"Tablet", @"Smartphone", @"Smartphone", @"Tablet", @"Tablet", @"Tablet", @"Smartphone", @"Smartphone", @"Smartphone", nil];
    
    descriptionArray = [[NSMutableArray alloc] initWithObjects:
                        @"Newest smartphone made by Apple.  It has a 4 inch screen, a dual-core processor, 1 gb of RAM, and runs iOS as its operating system.  It is extremely thin and light.",
                        @"Latest high-end smartphone from Samsung.  It has a 4.8 inch screen, has a dual-core processor, 2 gb of RAM, and runs Android as its operating system.  It is quite thin and feels fantastic in the hand.",
                        @"Apple's high-end tablet.  It has a 9.7 inch Retina display, a dual core processor, and runs iOS as its operating system.  It is very thin and is sleek.",
                        @"Samsung's latest and greates phablet.  The Note 2 has a huge 5.5 inch screen, a quad-core processor, 2 gb of RAM, and runs Android as its operating system.  It also features a pressure sensitive stylus and wacom digitizer.",
                        @"Motorola's newest high end smartphone.  It has a 4.7 inch screen, a dual-core processor, 1 gb of RAM, and runs Android as its operating system.  It is thin, long lasting and durable.",
                        @"The last generation of the Nexus series smartphones.  It has a 4.65 inch screen, a dual-core processor, 1 gb of RAM, and runs Android as its operating system.  Although it is a year old, it is still a powerful device.",
                        @"A 7-inch Nexus tablet.  It has a 7 inch screen, a quad-core processor, 1 gb of RAM, and runs Android as its operating system.  The Nexus 7 was the first Nexus tablet and is thin, light, and fast.",
                        @"Apple's top of the line laptop computer.  It features a retina display, up to an i7 quad-core processor, and up to 16 gb of RAM.  It runs OSX.",
                        @"A gaming laptop from Dell/Alienware.  It is customizable and currently runs Windows 7.  Although it looks great and is portable, remember that it is a gaming laptop so it is not very light or thin.",
                        @"Apple's smaller notebook.  It is extremely thin and light making it ideal for people that are on the go.",
                        @"The newest Chrome-OS laptop from Google and Samsung.  It is a great lightweight alternative to the standard laptop.  Although it is durable and fast, it does require internet access for most of its features.",
                        @"The newest Nexus tablet.  It has a 10 inch screen, a dual-core processor, 2 gb of RAM, and runs Android as its operating system.  The Nexus 10 has a beautiful screen that has the highest pixel density of any tablet display.",
                        @"The first Windows 8 phone.  It has a 4.5 inch screen, a dual-core processor, and runs Windows Mobile 8 as its operating system.  It has possibly the best camera ever seen in a phone.",
                        @"A recent HTC flagship device.  It has a 4.7 inch screen, a quad-core processor, 1 gb of RAM, and runs Android as its operating system.  It has one of the most favored screens available in it with great brightness, true whites, and stunning colors.",
                        @"The full saized version of the Note.  It has a 10.1 inch screen, a quad-core processor, 1 gb of RAM, and runs Android as its operating system.  Like the Note 2, this tablet has a pressure sensitive stylus and wacom digitizer.",
                        @"Microsoft's first Windows 8 tablet.  It has a 10.6 inch screen, a quad-core processor, 2 gb of RAM, and runs Windows RT as its operating system.  It is the first of a new breed of tablets.",
                        @"A Motorola tablet from earlier this year.  It has a 10.1 inch screen, a dual-core processor, 1 gb of RAM, and runs Android as its operating system.  It is an older tablet and should be getting upgraded in the near future.",
                        @"A HTC feature phone from earlier this year.  It has a 4.7 inch screen, a dual-core processor, 1 gb of RAM, and runs Android as its operating system.  It is the LTE successor to the Evo 4G.",
                        @"An HTC phone released in Japan.  It has a 5 inch screen, a quad-core processor, 2 gb of RAM, and runs Android as its operating system.  It is the first known phone to have a full 1080p display.",
                        @"The latest Nexus smartphone.  It has a 4.7 inch screen, a quad-core processor, 2 gb of RAM, and runs Android as its operating system.  It is the first time LG has had a feature Android phone and it looks stunning.",
                        nil];

    
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"/devices";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0.878 green:0.2 blue:0.549 alpha:1]; /*#e0338c*/
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

//Was supposed to allow data view
/*- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    NSString *deviceSelected = [titleArray objectAtIndex:[indexPath row]];
    //NSString *categorySelected = [categoryArray objectAtIndex:[indexPath row]];
    NSString *deviceDescription = [descriptionArray objectAtIndex:[indexPath row]];
    
    NSString *deviceInfo = [NSString stringWithFormat:@"%@\n %@\n %@", deviceSelected, categorySelected, deviceDescription];
    
    self.detailView = nil;
    
    if (self.detailView == nil)
    {
        DetailViewController *details = [[DetailViewController alloc]initWithNibName:@"DetailViewController" bundle:[NSBundle mainBundle]];
        self.detailView = details;
        detailView.textSelected = deviceInfo;
    }
    
    [self presentViewController:detailView animated:TRUE completion:nil];
}*/

//Populates cells
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [theTableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil)
    {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
        /*NSArray* views = [[NSBundle mainBundle] loadNibNamed:@"CustomCell" owner:nil options:nil];
         for(UIView *view in views)
         {
         if([view isKindOfClass:[CustomTableCell class]])
         {
         cell = (CustomTableCell*)view;
         }
         }*/
        
    }
    
    cell.textLabel.text = (NSString*)[titleArray objectAtIndex:indexPath.row];
    
    return cell;
}

//Allows editing of cells via a swipe.
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

//Moves you to the Detail View
-(void)tableView:(UITableView*)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    DetailViewController *viewController = [[DetailViewController alloc]initWithNibName:@"DetailViewController" bundle:nil];
    
    if (viewController != nil)
    {
        [self.navigationController pushViewController:viewController animated:TRUE];
    }
}

/*//Was supposed to make custom cell work
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    //set identifier in IB too
    static NSString *CellIdentifier = @"Cell";
    
    CustomCellView *cell = [theTableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil)
    {
        NSArray *views = [[NSBundle mainBundle] loadNibNamed:@"CustomCellView" owner:nil options:nil];
        
        for (UIView *view in views)
        {
            if([view isKindOfClass:[CustomCellView class]])
            {
                cell = (CustomCellView *)view;
                cell.titleLabel.text = (NSString *)[titleArray objectAtIndex:indexPath.row];
                cell.categoryLabel.text = (NSString *)[categoryArray objectAtIndex:indexPath.row];
            }
        }
    }
    
    return cell;
}*/


@end
