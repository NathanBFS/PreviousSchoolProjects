//
//  EAViewController.m
//  calculator
//
//  Created by Nathan Buth on 10/5/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "EAViewController.h"

@interface EAViewController ()

@end

@implementation EAViewController
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
            if (self.secondInput != 0)
            {
                result = self.firstInput / self.secondInput;
            }
            else
            {
                /*NSString *alert = [NSString stringWithFormat:@"WHY DID YOU DO THAT?! NOW THE ENTIRE WORLD IS GOING TO EXPLODE!!!!! D:<"];
                [self DisplayAlertWithString:alert customTitle:@"FATAL ERROR!"];
                
                NSURL * firstUrl = [NSURL URLWithString:@""];
                UIImageView * firstAnimation = [AnimatedGif getAnimationForGifAtUrl: firstUrl];
                
                [ivOne addSubview:firstAnimation];*/
                
                [[NSThread mainThread] exit];
            }
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

-(IBAction)close:(id)sender
{
    [self dismissModalViewControllerAnimated:TRUE];
}

@end
