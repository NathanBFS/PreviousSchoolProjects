//
//  ViewController.m
//  testApp
//
//  Created by Nathan Buth on 8/9/12.
//  Copyright (c) 2012 Full Sail University. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad

{
    self.view.backgroundColor = [UIColor colorWithRed:0.055 green:0.133 blue:0.239 alpha:1];/*#0e223d*///Set background color
    
    /*******************************Title Label****************************************************/
    
    UILabel *title = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 10.0f, 300.0f, 20.0f)];
    if (title != nil)
    {
        title.backgroundColor = [UIColor colorWithRed:0.145 green:0.459 blue:0.58 alpha:1]; /*#257594*/
        title.text = @"The Eye of the World";
        title.textColor = [UIColor colorWithRed:1 green:0.325 blue:0.051 alpha:1];
        title.textAlignment = UITextAlignmentCenter;
    }
    
    [self.view addSubview:title];//Make title label
    
    /*******************************Author Labels****************************************************/
    
    UILabel *author = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 40.0f, 145.0f, 20.0f)];
    if (author != nil)
    {
        author.backgroundColor = [UIColor colorWithRed:0.184 green:0.859 blue:0.659 alpha:1]; /*#2fdba8*/
        author.text = @"Author: ";
        author.textColor = [UIColor colorWithRed:0.91 green:0.047 blue:0.475 alpha:1]; /*#e80c79*/
        author.textAlignment = UITextAlignmentRight;
    }
    
    [self.view addSubview:author];//Make author label
    
    UILabel *authorName = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 40.0f, 145.0f, 20.0f)];
    if (authorName != nil)
    {
        authorName.backgroundColor = [UIColor colorWithRed:0.161 green:0.671 blue:0.647 alpha:1]; /*#29aba5*/
        authorName.text = @"Robert Jordan";
        authorName.textColor = [UIColor colorWithRed:1 green:0 blue:0 alpha:1]; /*#ff0000*/
        authorName.textAlignment = UITextAlignmentLeft;
    }
    
    [self.view addSubview:authorName];//Make author name label
    
    /*******************************Published Labels****************************************************/
    
    UILabel *published = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 70.0f, 145.0f, 20.0f)];
    if (published != nil)
    {
        published.backgroundColor = [UIColor colorWithRed:0.22 green:0.698 blue:0.878 alpha:1]; /*#38b2e0*/
        published.text = @"Published: ";
        published.textColor = [UIColor colorWithRed:0.6 green:0.302 blue:0.133 alpha:1]; /*#994d22*/
        published.textAlignment = UITextAlignmentRight;
    }
    
    [self.view addSubview:published];//Make published label
    
    UILabel *publishedDate = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 70.0f, 145.0f, 20.0f)];
    if (publishedDate != nil)
    {
        publishedDate.backgroundColor = [UIColor colorWithRed:0.482 green:0.773 blue:0.878 alpha:1]; /*#7bc5e0*/
        publishedDate.text = @"January 15, 1990";
        publishedDate.textColor = [UIColor colorWithRed:0.851 green:0.431 blue:0.188 alpha:1]; /*#d96e30*/
        publishedDate.textAlignment = UITextAlignmentLeft;
    }
    
    [self.view addSubview:publishedDate];//Make published date label
    
    /*******************************Summary Labels****************************************************/
    
    UILabel *summary = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 100.0f, 145.0f, 20.0f)];
    if (summary != nil)
    {
        summary.backgroundColor = [UIColor colorWithRed:0.902 green:0.455 blue:0.2 alpha:1]; /*#e67433*/
        summary.text = @"Summary: ";
        summary.textColor = [UIColor colorWithRed:0.082 green:0.263 blue:0.329 alpha:1]; /*#154354*/
        summary.textAlignment = UITextAlignmentLeft;
    }
    
    [self.view addSubview:summary];//Make summary label
    
    UILabel *summaryText = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 130.0f, 300.0f, 235.0f)];
    if (summaryText != nil)
    {
        summaryText.backgroundColor = [UIColor colorWithRed:0.941 green:0.561 blue:0.161 alpha:1]; /*#f08f29*/
        summaryText.text = @"The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. In the Third Age, and Age of Prophesy, the World and Time themselves hang in the balance. What was, what will be, and what is, may yet fall under the Shadow.Let the Dragon Ride again on the winds of time.";
        summaryText.textColor = [UIColor colorWithRed:0.122 green:0.384 blue:0.478 alpha:1]; /*#1f627a*/
        summaryText.textAlignment = UITextAlignmentCenter;
        summaryText.numberOfLines = 12;
    }
    
    [self.view addSubview:summaryText];//Make summary text label
    
    /*******************************List of Items Labels****************************************************/
    
    NSArray *items = [[NSArray alloc] initWithObjects:@"Wheel of Time", @"Dragon Reborn", @"Aes Sedai", @"Shai'Tan", @"Ta'Veren", nil];//NSArray of items for ListOfItems
    NSMutableString *itemsList = [[NSMutableString alloc] init];
    
    for (int i=0; i < [items count]; i++) {
        
        NSString *insert = @", ";
        
        if (i == ([items count] - 1)){
            
            insert = @"...";
            
        }
        
        [itemsList insertString:[[items objectAtIndex:i] stringByAppendingString:insert] atIndex:[itemsList length]];
    }//Create itemsList and append items into it
    
    UILabel *listOfItems = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 375.0f, 145.0f, 20.0f)];
    if (listOfItems != nil)
    {
        listOfItems.backgroundColor = [UIColor colorWithRed:0.122 green:0.259 blue:0.78 alpha:1], /*#1f42c7*/
        listOfItems.text = @"List of Items: ";
        listOfItems.textColor = [UIColor colorWithRed:0.902 green:0.216 blue:0.153 alpha:1]; /*#e63727*/
        listOfItems.textAlignment = UITextAlignmentLeft;
    }
    
    [self.view addSubview:listOfItems];//Make list of items label
    
    UILabel *listOfItemsList = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 405.0f, 300.0f, 40.0f)];
    if (listOfItemsList != nil)
    {
        listOfItemsList.backgroundColor = [UIColor colorWithRed:0.639 green:0.71 blue:0.98 alpha:1]; /*#a3b5fa*/
        listOfItemsList.text = itemsList;
        listOfItemsList.textColor = [UIColor colorWithRed:0.941 green:0.337 blue:0.161 alpha:1]; /*#f05629*/
        listOfItemsList.textAlignment = UITextAlignmentCenter;
        listOfItemsList.numberOfLines = 2;
    }
    
    [self.view addSubview:listOfItemsList];//Make list of items list label
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
    } else {
        return YES;
    }
}

@end
