//
//  AppDelegate.h
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "MyMapAnnotation.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, UITabBarControllerDelegate>
{
    MyMapAnnotation *one;
    MyMapAnnotation *two;
    MyMapAnnotation *three;
    MyMapAnnotation *four;
    MyMapAnnotation *five;
    MyMapAnnotation *six;
    MyMapAnnotation *seven;
    MyMapAnnotation *eight;
    MyMapAnnotation *nine;
    MyMapAnnotation *ten;
}
@property (strong, nonatomic) UIWindow *window;

@property (strong, nonatomic) UITabBarController *tabBarController;
@property (nonatomic, retain) NSMutableArray *mainArray;
@property (nonatomic, retain) MyMapAnnotation *one;
@property (nonatomic, retain) MyMapAnnotation *two;
@property (nonatomic, retain) MyMapAnnotation *three;
@property (nonatomic, retain) MyMapAnnotation *four;
@property (nonatomic, retain) MyMapAnnotation *five;
@property (nonatomic, retain) MyMapAnnotation *six;
@property (nonatomic, retain) MyMapAnnotation *seven;
@property (nonatomic, retain) MyMapAnnotation *eight;
@property (nonatomic, retain) MyMapAnnotation *nine;
@property (nonatomic, retain) MyMapAnnotation *ten;
-(void)getArray;

@end
