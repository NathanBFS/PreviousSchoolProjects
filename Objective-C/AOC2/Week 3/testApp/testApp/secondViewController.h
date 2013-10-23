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
    id <GetEventDetails> delegate;
    IBOutlet UIButton *saveEvent;
    IBOutlet UIButton *closeKeyboard;
    IBOutlet UILabel *event;
    IBOutlet UITextField *eventInfo;
    NSString *fullEvent;
    IBOutlet UILabel *date;
    IBOutlet UIDatePicker *eventDate;
    NSString *finalDate;
}

@property (strong) id <GetEventDetails> delegate;
@property (nonatomic, retain)IBOutlet UIDatePicker *eventDate;

-(IBAction)saveEvents:(id)sender;
-(IBAction)collapseKeyboard:(id)sender;

@end
