//
//  ThirdViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"

@interface ThirdViewController ()

@end

@implementation ThirdViewController

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

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"Video Details";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0.565 green:0 blue:0 alpha:1]; /*#900000*/
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)passName:(NSString*)title type:(NSString*)description
{
    self.title = title;
    NSString *tempTitle = [[NSString alloc] initWithFormat:@"%@",title];
    NSString *tempDescription = [[NSString alloc] initWithFormat:@"\n %@",description];
    myTextView.text = @"";
    shownText = [NSMutableString stringWithString:myTextView.text];
    [shownText appendString:tempTitle];
    [shownText appendString:tempDescription];
    myTextView.text = shownText;
    
}


@end
