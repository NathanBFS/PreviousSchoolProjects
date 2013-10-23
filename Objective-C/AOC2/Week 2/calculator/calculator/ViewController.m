//
//  ViewController.m
//  calculator
//
//  Created by Nathan Buth on 10/4/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"
#import "infoViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize numberPressed, firstInput, secondInput, numberInput, calculation;


- (void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle
{
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:customTitle message:alertString delegate:nil cancelButtonTitle:@"Okay" otherButtonTitles:nil];
    if (alertView != nil)
    {
        [alertView show];
    }
}

-(IBAction)powerSwitch:(id)sender
{
    UISwitch *pSwitch = (UISwitch *)sender;
    if (pSwitch != nil)
    {
        NSLog(@"Switch triggered!");
    }
}

-(IBAction)infoButton:(id)sender
{
    if (onSwitch.on != false)
    {
        infoViewController *viewController = [[infoViewController alloc]initWithNibName:@"infoView" bundle:nil];
        if (viewController != nil)
        {
            [self presentModalViewController:viewController animated:TRUE];
        }
    } else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }

}

- (IBAction)number:(UIButton *)sender
{
    if (onSwitch.on != false)
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
    }else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }
}

- (IBAction)operators:(id)sender
{
    if (onSwitch.on != false)
    {
        self.numberPressed = NO;
        self.firstInput = [self.numberInput.text intValue];
        self.calculation = [sender currentTitle];
    } else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }
}

- (IBAction)equals
{
    if (onSwitch.on != false)
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
    } else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }
}

- (IBAction)clear
{
    if (onSwitch.on != false)
    {
        firstInput = 0;
        secondInput = 0;
        int result = 0;
        self.numberInput.text = [NSString stringWithFormat:@"%d", result];
    } else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }

}


-(IBAction)backgroundChange:(id)sender
{
    if (onSwitch.on != false)
    {
        UISegmentedControl *segmentControl = (UISegmentedControl*)sender;
        if (segmentControl != nil)
        {
            int selectedIndex = segmentControl.selectedSegmentIndex;
            if (selectedIndex == MARBLEWHITE)
            {
                self.view.backgroundColor = [UIColor colorWithRed:1 green:1 blue:1 alpha:1]; /*#ffffff*/
            }
            else if (selectedIndex == SLATEBLUE)
            {
                self.view.backgroundColor = [UIColor colorWithRed:0.184 green:0.29 blue:0.388 alpha:1]; /*#2f4a63*/
            }
            else if (selectedIndex == AGATEGREEN)
            {
                self.view.backgroundColor = [UIColor colorWithRed:0.141 green:0.42 blue:0.141 alpha:1]; /*#246b24*/
            }
        }
    } else {
        NSString *alert = [NSString stringWithFormat:@"To use this function the calculator must be on."];
        [self DisplayAlertWithString:alert customTitle:@"Not On"];
    }
}


- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
