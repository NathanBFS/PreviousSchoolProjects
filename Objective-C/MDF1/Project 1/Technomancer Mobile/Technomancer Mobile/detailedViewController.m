//
//  detailedViewController.m
//  testApp
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "detailedViewController.h"
#import "tableViewController.h"
#import "CustomTableCell.h"

@interface detailedViewController ()

@end

@implementation detailedViewController

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
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
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

@end
