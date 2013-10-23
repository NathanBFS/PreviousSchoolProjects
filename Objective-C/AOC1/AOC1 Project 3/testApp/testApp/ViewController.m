//
//  ViewController.m
//  testApp
//
//  Created by Nathan Buth on 8/16/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

/*********************Start of Functions*********************/

//1  Add Function
- (int)Add:(NSInteger)addIntegerOne addIntegerTwo:(NSInteger)addIntegerTwo
{
    return addIntegerOne + addIntegerTwo;
}//End 1 & Add function

//2 BOOL Function
- (BOOL)Compare:(NSInteger)compareIntegerOne compareIntegerTwo:(NSInteger)compareIntegerTwo
{
    return (compareIntegerOne == compareIntegerTwo);
}//End 2 & BOOL Function

//3 Append Function
- (NSString *)Append:(NSString *)appendStringOne appendStringTwo:(NSString *)appendStringTwo
{
    NSMutableString *appendedString = [[NSMutableString alloc]initWithFormat:appendStringOne];
    [appendedString appendString:appendStringTwo];
    return appendedString;
}//End 3 & Append Function

//5 Display Alert Function
- (void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle
{
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:customTitle message:alertString delegate:nil cancelButtonTitle:@"Okay" otherButtonTitles:nil];
    if (alertView != nil)
    {
        [alertView show];
    }
}//End 5 & Display Alert Function

/*********************End of Functions*********************/

- (void)viewDidLoad
{
    /**********************************Start of Calls**********************************/
    
    //4 Call Append Function
    NSString *alertString = [self Append:@"All Your Base " appendStringTwo:@"Are Belong To Us!!!"];
    [self DisplayAlertWithString:alertString customTitle:@"Appended String"];
    //End 4 & Call Append Function
    
    //6 Call Add Function
    int addIntegersResult = [self Add:arc4random() addIntegerTwo:arc4random()];
    //End 6 & Call Add Function
    
    //7 Convert addIntegersResult to a NSString for Alert
    NSNumber *convertNumber = [NSNumber numberWithInt:addIntegersResult];
    NSString *convertString = [convertNumber stringValue];
    //End 7 & Convert addIntegersResult to a NSString for Alert
    
    //8 Alert convertString(Add Function Results)
    NSString *alertAddResults = [self Append:@"The number is " appendStringTwo:convertString];
    [self DisplayAlertWithString:alertAddResults customTitle:@"Addition Results"];
    //End 8 & Alert convertString(Add Function Results)
    
    //9 Call Compare Function
    NSInteger compareNumberOne = arc4random() % 2;;
    NSInteger compareNumberTwo = arc4random() % 2;;
    BOOL compareResult = [self Compare:compareNumberOne compareIntegerTwo:compareNumberTwo];
    
    if (compareResult == YES)
    {
        NSString *results = [NSString stringWithFormat:@"%@", compareResult ? @"yes" : @"no"];
        NSString *results2 = [NSString stringWithFormat:@"%@", compareResult ? @"are" : @"are not"];
        NSString *alert = [NSString stringWithFormat:@"Are both of our numbers the same? Well our first number is %i, and our second number 2 is %i. So, %@, they %@ equal to each other.",compareNumberOne,compareNumberTwo, results, results2];
        [self DisplayAlertWithString:alert customTitle:@"Compare Results"];
    } else if (compareResult == NO) {
        NSString *results = [NSString stringWithFormat:@"%@", compareResult ? @"yes" : @"no"];
        NSString *results2 = [NSString stringWithFormat:@"%@", compareResult ? @"are" : @"are not"];
        NSString *alert = [NSString stringWithFormat:@"Are both of our numbers the same? Well our first number is %i, and our second number 2 is %i. So, %@, they %@ equal to each other.",compareNumberOne,compareNumberTwo, results, results2];
        [self DisplayAlertWithString:alert customTitle:@"Comparsion Results"];
    }//End 9 & Call Compare Function 
    
    /**********************************End of Calls**********************************/
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

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
