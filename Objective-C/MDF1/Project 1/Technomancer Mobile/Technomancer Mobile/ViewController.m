//
//  ViewController.m
//  Technomancer Mobile
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"
#import "tableViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

-(void)viewWillAppear:(BOOL)animated

//Sets up swipe functions
{
    leftSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    leftSwiper.direction = UISwipeGestureRecognizerDirectionLeft;
    [swipeArea addGestureRecognizer:leftSwiper];
    
    rightSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    rightSwiper.direction = UISwipeGestureRecognizerDirectionRight;
    [swipeArea addGestureRecognizer:rightSwiper];
    
    [super viewWillAppear:animated];
}
//End of gesture setup

//Go to Add Events Page
//Switches to the view where you can add events after swiping right
-(void)onSwipe:(UISwipeGestureRecognizer*)recognizer
{
    tableViewController *viewController = [[tableViewController alloc]initWithNibName:@"tableViewController" bundle:nil];
                
    if (viewController != nil)
    {
        [self presentViewController:viewController animated:TRUE completion:nil];
    }
}
//End Go to Add Events Page

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
