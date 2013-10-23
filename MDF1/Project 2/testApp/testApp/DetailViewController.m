//
//  DetailViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "DetailViewController.h"
#import "SecondViewController.h"
#import "CustomCellView.h"

@interface DetailViewController ()

@end

@implementation DetailViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

-(id)initWithTextSelected:(NSString *) text
{
    self.textSelected = text;
    [detail setText:[self textSelected]];
    return self;
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

@end
