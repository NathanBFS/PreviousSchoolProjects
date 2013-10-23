//
//  infoViewController.m
//  calculator
//
//  Created by Nathan Buth on 10/4/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "infoViewController.h"
#import "RPNViewController.h"
#import "EAViewController.h"

@interface infoViewController ()

@end

@implementation infoViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

-(IBAction)rpnButton:(id)sender
{
        RPNViewController *viewController = [[RPNViewController alloc]initWithNibName:@"RPNView" bundle:nil];
        if (viewController != nil)
        {
            [self presentModalViewController:viewController animated:TRUE];
        }
}

-(IBAction)eaButton:(id)sender
{
        EAViewController *viewController = [[EAViewController alloc]initWithNibName:@"EAView" bundle:nil];
        if (viewController != nil)
        {
            [self presentModalViewController:viewController animated:TRUE];
        }
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)standard:(id)sender
{
    [self dismissModalViewControllerAnimated:TRUE];
}

@end
