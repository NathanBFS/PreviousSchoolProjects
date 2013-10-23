//
//  FirstViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "FirstViewController.h"
#import "CategoryViewController.h"

@interface FirstViewController ()

@end

@implementation FirstViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"/home", @"/home");
        //self.tabBarItem.image = [UIImage imageNamed:@"first"];
    }
    return self;
}

-(IBAction)onClick:(id)sender
{
    CategoryViewController *viewController = [[CategoryViewController alloc]initWithNibName:@"CategoryViewController" bundle:nil];
    
    if (viewController != nil)
    {
        [self.navigationController pushViewController:viewController animated:TRUE];
    }

}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"/home";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0.878 green:0.2 blue:0.549 alpha:1]; /*#e0338c*/
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
