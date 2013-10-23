//
//  ViewController.h
//  testApp
//
//  Created by Nathan Buth on 10/11/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "secondViewController.h"

@interface ViewController : UIViewController <GetEventDetails>
{
    IBOutlet UILabel *heading;//Heading label
    IBOutlet UIButton *saveButton;//Button for saving user defaults
    IBOutlet UITextView *plannedEvents;//Textview that displays planned dates
    int eventsLoaded;
    IBOutlet UILabel *rightSwipeLabel;//Bottom label that is swipable
        
    UISwipeGestureRecognizer *leftSwiper;//Left swipe gesture
    UISwipeGestureRecognizer *rightSwiper;//Right swipe gesture
}

-(IBAction)saveTextView:(id)sender;//Save user defaults
-(void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle;//Display alerts

@end
