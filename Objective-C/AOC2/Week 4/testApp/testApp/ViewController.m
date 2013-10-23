//
//  ViewController.m
//  testApp
//
//  Created by Nathan Buth on 10/11/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"
#import "secondViewController.h"

@interface ViewController ()

@end

@implementation ViewController

//Pass event info into textView
-(void)eventSave:(NSString*)theEvent
{
    plannedEvents.text = [plannedEvents.text stringByAppendingString:theEvent];
}

- (void)viewDidLoad
{
    //Show the saved user defaults when entering the app
    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    if(userDefaults != nil)
    {
        NSString *plannedDates = [userDefaults objectForKey:@"dates"];
        
        plannedEvents.text = plannedDates;
        
    }
    //End displaying of user defaults
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

//So that an alert can be made
-(void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle
{
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:customTitle message:alertString delegate:nil cancelButtonTitle:@"Close" otherButtonTitles:nil];
    if (alertView != nil)
    {
        [alertView show];
    }
}
//End alert function

//Saves the user defaults when the Save button is pressed
-(IBAction)saveTextView:(id)sender
{
    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    if(userDefaults != nil)
    {
        NSString *plannedDates = plannedEvents.text;
        
        [userDefaults setObject:plannedDates forKey:@"dates"];
        
        [userDefaults synchronize];
    }
}
//End of saving defaults

-(void)viewWillAppear:(BOOL)animated

//Sets up swipe functions
{
    leftSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    leftSwiper.direction = UISwipeGestureRecognizerDirectionLeft;
    [rightSwipeLabel addGestureRecognizer:leftSwiper];
    
    rightSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    rightSwiper.direction = UISwipeGestureRecognizerDirectionRight;
    [rightSwipeLabel addGestureRecognizer:rightSwiper];
    
    [super viewWillAppear:animated];
}
//End of gesture setup

//Go to Add Events Page
//Switches to the view where you can add events after swiping right
-(void)onSwipe:(UISwipeGestureRecognizer*)recognizer
{
    if(recognizer.direction == UISwipeGestureRecognizerDirectionLeft)
    {
        NSString *alert = [NSString stringWithFormat:@"Swiping left here currently does nothing."];
        [self DisplayAlertWithString:alert customTitle:@"No Action Here"];
    }
    else if(recognizer.direction == UISwipeGestureRecognizerDirectionRight)
    {
        secondViewController *viewController = [[secondViewController alloc]initWithNibName:@"secondViewController" bundle:nil];
        
        viewController.delegate = self;
        
        if (viewController != nil)
        {
            [self presentViewController:viewController animated:TRUE completion:nil];
        }
    }
}
//End Go to Add Events Page

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)viewDidAppear:(BOOL)animated
{

    [super viewDidAppear:animated];
}

@end
