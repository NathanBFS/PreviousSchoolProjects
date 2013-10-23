//
//  SecondViewController.h
//  Classic Youtube
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"

@interface SecondViewController : UIViewController
{
    IBOutlet UIWebView *myWebView;
    IBOutlet UIBarButtonItem *backButton;
    NSURL *xmlURL;
    NSURLRequest *xmlURLRequest;
    NSURLConnection *xmlURLConnection;
}

-(IBAction)onClick:(id)sender;

@end
