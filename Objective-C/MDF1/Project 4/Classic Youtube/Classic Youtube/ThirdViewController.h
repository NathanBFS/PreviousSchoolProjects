//
//  ThirdViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"

@interface ThirdViewController : UIViewController
{
    IBOutlet UITextView *myTextView;
    NSMutableString *shownText;
}

-(void)passName:(NSString*)title type:(NSString*)description ;

@end
