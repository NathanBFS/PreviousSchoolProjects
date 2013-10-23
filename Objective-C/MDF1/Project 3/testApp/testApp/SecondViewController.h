//
//  SecondViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>
#import "FirstViewController.h"
#import "ThirdViewController.h"
#import "MyMapAnnotation.h"
#import "AppDelegate.h"

@interface SecondViewController : UIViewController
{
    IBOutlet MKMapView *mapView;
    NSMutableArray *arrayName;
    NSMutableArray *arrayLocation;
    MyMapAnnotation *passAnnotation;
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

@property (retain) IBOutlet MKMapView *mapView;
@property (nonatomic, retain) NSMutableArray *arrayName;
@property (nonatomic, retain) NSMutableArray *arrayLocation;
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

@end
