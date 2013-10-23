//
//  secondViewController.h
//  testApp
//
//  Created by Nathan Buth on 10/11/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol GetEventDetails <NSObject>

@required
-(void)eventSave:(NSString*)theEvent;

@end

@interface secondViewController : UIViewController
{
    id <GetEventDetails> delegate;//Define the delegate
    IBOutlet UIButton *closeKeyboard;//Button the closes the keyboard
    IBOutlet UIButton *back;//Button for going back to the main page without passing event info
    IBOutlet UILabel *pageLabel;//Top label
    IBOutlet UILabel *event;//Event label
    IBOutlet UITextField *eventInfo;//text field for entering event info
    NSString *fullEvent;//F
    IBOutlet UILabel *date;//Date label
    IBOutlet UIDatePicker *eventDate;//Even date picker
    NSString *finalDate;
    IBOutlet UILabel *leftSwipeLabel;//Swipable label to get back to first view and pass info to textView
    
    UISwipeGestureRecognizer *leftSwiper;//Left swipe gesture
    UISwipeGestureRecognizer *rightSwiper;//Right swipe gesture
}

@property (strong) id <GetEventDetails> delegate;//Set delegate
@property (nonatomic, retain)IBOutlet UIDatePicker *eventDate;//Setup of date picker

-(IBAction)collapseKeyboard:(id)sender;//Closes the keyboard
-(IBAction)goBack:(id)sender;//Sends you back to the first view without passing any info
-(void)DisplayAlertWithString:(NSString *)alertString customTitle:(NSString *)customTitle;//Displays alerts

@end
