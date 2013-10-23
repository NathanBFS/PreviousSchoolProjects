//
//  FirstViewController.h
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

@interface FirstViewController : UIViewController <UITableViewDelegate, UITableViewDataSource, NSURLConnectionDelegate, NSURLConnectionDataDelegate, NSXMLParserDelegate>
{
    IBOutlet UITableView *myTableView;
    NSURL *xmlURL;
    NSURLRequest *xmlURLRequest;
    NSURLConnection *xmlURLConnection;
    NSMutableData *getData;
    NSMutableArray *videosArray;
    NSInteger *items;
}

@end
