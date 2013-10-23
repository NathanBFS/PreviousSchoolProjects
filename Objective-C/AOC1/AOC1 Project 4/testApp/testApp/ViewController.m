//
//  ViewController.m
//  testApp
//
//  Created by Nathan Buth on 8/23/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"

#define LOGIN 0
#define DATE 1
#define INFO 2

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    self.view.backgroundColor = [UIColor lightGrayColor];

    /**************** Create UI Elements ****************************************************/
    
    //create label with the text Username: 
    usernameLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 12.0f, 90.0f, 20.0f)];
    if (usernameLabel != nil)
    {
        usernameLabel.backgroundColor = [UIColor lightGrayColor];
        usernameLabel.text = @"Username: ";
    }
    [self.view addSubview:usernameLabel];//Username: label
    
    //create text input field for username
    usernameInput = [[UITextField alloc] initWithFrame:CGRectMake(105.0f, 10.0f, 205.0f, 30.0f)];
    if (usernameInput != nil)
    {
        usernameInput.borderStyle = UITextBorderStyleRoundedRect;
        [self.view addSubview:usernameInput];
    }//Username text input
    
    //create Login button
    loginButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (loginButton != nil)
    {
        loginButton.tag = LOGIN;
        loginButton.frame = CGRectMake(210.0f, 50.0f, 100.0f, 35.0f);
        loginButton.tintColor = [UIColor grayColor];
        [loginButton setTitle:@"Login" forState:UIControlStateNormal];
        [loginButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:loginButton];
    }//Login Button
    
    //create label to contain username status text
    statusTextLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 95.0f, 300.0f, 100.0f)];
    if (statusTextLabel != nil)
    {
        statusTextLabel.text = @"Please Enter Username";
        statusTextLabel.backgroundColor = [UIColor darkGrayColor];
        statusTextLabel.textColor = [UIColor whiteColor];
        statusTextLabel.textAlignment = UITextAlignmentCenter;
    }
    [self.view addSubview:statusTextLabel];//Status label
    
    //create Date button
    dateButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (dateButton != nil)
    {
        dateButton.tag = DATE;
        dateButton.frame = CGRectMake(10.0f, 250.0f, 110.0f, 40.0f);
        dateButton.tintColor = [UIColor grayColor];
        [dateButton setTitle:@"Show Date" forState:UIControlStateNormal];
        [dateButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:dateButton];
    }//Date Button
    
    //create Info button
    infoButton = [UIButton buttonWithType:UIButtonTypeInfoDark];
    if (infoButton != nil)
    {
        infoButton.tag = INFO;
        infoButton.frame = CGRectMake(10.0f, 425.0f, 30.0f, 30.0f);
        [infoButton addTarget:self action:@selector(onClick:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:infoButton];
    }//Info Button
    
    //creat Info text label
    infoTextLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 500.0f, 300.0f, 75.0f)];
    if (infoTextLabel != nil)
    {
        infoTextLabel.backgroundColor = [UIColor lightGrayColor];
        infoTextLabel.textColor = [UIColor whiteColor];
        infoTextLabel.textAlignment = UITextAlignmentCenter;
    }
    [self.view addSubview:infoTextLabel];//Info text label
    
    /****************** End Create UI Elements *************************************************/
    
    [super viewDidLoad];
}

-(BOOL)textFieldShouldReturn:(UITextField *)textField {
    if (textField == usernameInput) {
        [textField resignFirstResponder];
    }
    return NO;
}//Method for closing the keyboard

- (void)onClick:(UIButton*)button

/********************** Create Button Actions *********************************************/

{
    //Login Button
    if(button.tag == LOGIN)
    {
        NSString *usernameText = usernameInput.text;
        [self textFieldShouldReturn:usernameInput];
        
            if (usernameText.length == 0)
            {
                statusTextLabel.text = @"Error: Username cannot be empty.";
                statusTextLabel.textColor = [UIColor redColor];
            }
            else
            {
                NSString *usernameText = [[NSString alloc] initWithString:usernameInput.text];
                statusTextLabel.text = [NSString stringWithFormat:@"User: '%@' has been logged in", usernameText];
                statusTextLabel.textColor = [UIColor whiteColor];
                statusTextLabel.numberOfLines = 3;
            }
    }//end Login Button
    
    //Date Button
    else if (button.tag == DATE)
    {
        NSDate *date = [NSDate date];
        NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
        if (dateFormatter != nil)
        {
            [dateFormatter setDateFormat:@"MMMM d, yyyy h:mm:s:a zzzz"];
            NSString* dateLabel = [dateFormatter stringFromDate:date];
            UIAlertView *dateAlertView = [[UIAlertView alloc] initWithTitle:@"Current Date" message:dateLabel delegate:nil cancelButtonTitle:@"Close" otherButtonTitles:nil];
            if(dateAlertView != nil)
            {
                [dateAlertView show];
            }
        }
    }//end Date Button
    
    //Info Button
    else if (button.tag == INFO)
    {
        infoTextLabel.text = @"This application was created by: Nathan Buth";
        infoButton.frame = CGRectMake(10.0f, 325.0f, 30.0f, 30.0f);
        infoTextLabel.frame = CGRectMake(10.0f, 370.0f, 300.0f, 75.0f);
        infoTextLabel.backgroundColor = [UIColor darkGrayColor];
        statusTextLabel.textColor = [UIColor whiteColor];
        infoTextLabel.numberOfLines = 2;
    }//end Info Button
}
    
/****************** End Create Button Actions *********************************************/

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
    } else {
        return YES;
    }
}

@end
