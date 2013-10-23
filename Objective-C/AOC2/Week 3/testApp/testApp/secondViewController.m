//
//  secondViewController.m
//  testApp
//
//  Created by Nathan Buth on 10/11/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "secondViewController.h"

@interface secondViewController ()

@end

@implementation secondViewController
@synthesize delegate, eventDate;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

//Save Events
//Saves the data entered and switchs back to the first view
-(IBAction)saveEvents:(id)sender
{
    NSString *eventText = eventInfo.text;//saves entered text as a string
    NSLog(@"Event: %@", eventText);//displays the string in the log
        
    NSDate *chosenDate = [eventDate date];//declares the selected date
    if(chosenDate != nil)
    {
        NSDateFormatter *trueDate = [[NSDateFormatter alloc]init];
        if(trueDate != nil)
        {
            [trueDate setDateFormat:@"MMMM dd, h:mm a"];//Makes the date more readable
        }
    finalDate = [trueDate stringFromDate:chosenDate];//Makes the date a string
    NSLog(@"Event Date: %@", finalDate);//Loads date into the log
    NSLog(@"The Event is: %@ on %@", eventText, finalDate);//Loads full event info into the log
    }
    
    if(delegate != nil)
    {
        fullEvent = [NSString stringWithFormat:@"%@ \n %@ \n \n", eventInfo.text, finalDate];
        [delegate eventSave:fullEvent];
    }
    
    [self dismissViewControllerAnimated:TRUE completion:nil];

}
//End Save Events


//Collapse/Expand Keyboard
//Allows the keyboard to expand and collapse dynamically
-(void)viewWillAppear:(BOOL)animated
{
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(showKeyboard:) name:UIKeyboardWillShowNotification object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(hideKeyboard:) name:UIKeyboardWillHideNotification object:nil];
    
    [super viewWillAppear:animated];
}

-(void)showKeyboard:(NSNotification *)notification
{
    
}

-(void)hideKeyboard:(NSNotification *)notification
{
    
}

-(IBAction)collapseKeyboard:(id)sender
{
    [eventInfo resignFirstResponder];
}
//End Collaps/Expand Keyboard



- (void)viewDidLoad
{
    //makes it so that users cannot set to date/time earlier than the present date/time
    eventDate.minimumDate = [NSDate date];
    
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
