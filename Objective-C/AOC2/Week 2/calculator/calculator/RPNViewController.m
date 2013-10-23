//
//  RPNViewController.m
//  calculator
//
//  Created by Nathan Buth on 10/5/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "RPNViewController.h"

@interface RPNViewController ()

@end

@implementation RPNViewController
@synthesize numberPressed, firstInput, secondInput, numberInput, calculation;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle
{
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:customTitle message:alertString delegate:nil cancelButtonTitle:@"Okay" otherButtonTitles:nil];
    if (alertView != nil)
    {
        [alertView show];
    }
}

- (IBAction)number:(UIButton *)sender
{
    NSString *number = sender.currentTitle;
    if (self.numberPressed)
    {
        self.numberInput.text = [self.numberInput.text stringByAppendingString:number];
    }
    else
    {
        self.numberInput.text = number;
        self.numberPressed = YES;
    }
}

- (IBAction)operators:(id)sender
{
    self.numberPressed = NO;
    self.firstInput = [self.numberInput.text intValue];
    self.calculation = [sender currentTitle];
}

- (IBAction)equals
{
    self.numberPressed = NO;
    self.secondInput = [self.numberInput.text intValue];
    int result = 0;
    
    if ([self.calculation isEqualToString:@"/"])
    {
        result = self.firstInput / self.secondInput;
    }
    else if ([self.calculation isEqualToString:@"x"])
    {
        result = self.firstInput * self.secondInput;
    }
    else if ([self.calculation isEqualToString:@"+"])
    {
        result = self.firstInput + self.secondInput;
    }
    else if ([self.calculation isEqualToString:@"-"])
    {
        result = self.firstInput - self.secondInput;
    }
    
    self.numberInput.text = [NSString stringWithFormat:@"%d", result];
}

- (IBAction)clear
{
    firstInput = 0;
    secondInput = 0;
    int result = 0;
    self.numberInput.text = [NSString stringWithFormat:@"%d", result];
}


-(IBAction)backgroundChange:(id)sender
{
    UISegmentedControl *segmentControl = (UISegmentedControl*)sender;
    if (segmentControl != nil)
    {
        int selectedIndex = segmentControl.selectedSegmentIndex;
        if (selectedIndex == TRUEMARBLE)
        {
            self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"marble.png"]];
        }
        else if (selectedIndex == TRUESLATE)
        {
            self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"slate.png"]];
        }
        else if (selectedIndex == TRUEAGATE)
        {
            self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"agate.png"]];
        }
    }
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)viewDidAppear:(BOOL)animated
{
    int selectedIndex = changeBackground.selectedSegmentIndex;
    if (selectedIndex == TRUEMARBLE)
    {
        self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"marble.png"]];
    }
    else if (selectedIndex == TRUESLATE)
    {
        self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"slate.png"]];
    }
    else if (selectedIndex == TRUEAGATE)
    {
        self.view.backgroundColor = [[UIColor alloc] initWithPatternImage:[UIImage imageNamed:@"agate.png"]];
    }
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)close:(id)sender
{
    [self dismissModalViewControllerAnimated:TRUE];
}

@end
