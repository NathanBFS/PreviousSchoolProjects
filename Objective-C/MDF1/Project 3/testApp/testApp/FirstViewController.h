//
//  FirstViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "MyMapAnnotation.h"

@interface FirstViewController : UIViewController 
{
    IBOutlet UITableView *myTableView;
    IBOutlet NSMutableArray *locationsArray;
    MyMapAnnotation* grabAnnotations;
}

@property (nonatomic, retain)NSMutableArray *locationsArray;

@end
