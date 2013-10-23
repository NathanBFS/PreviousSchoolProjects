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
    IBOutlet UILabel *heading;
    IBOutlet UITextView *plannedEvents;
    int eventsLoaded;
    IBOutlet UIButton *addEvent;
}

-(IBAction)addEventPage:(id)sender;

@end
