//
//  ThirdViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "MyMapAnnotation.h"

@interface ThirdViewController : UIViewController
{
    IBOutlet MKMapView *detailedMapView;
    
    MyMapAnnotation *passAnnotation;
    IBOutlet UIView *infoView;
    IBOutlet UILabel *nameLabel;
    IBOutlet UILabel *latitudeLabel;
    IBOutlet UILabel *longitudeLabel;
    
}

@property (retain) IBOutlet MKMapView *detailedMapView;
- (IBAction)mapIt:(CLLocationCoordinate2D)coord title:(NSString *)title;

@end
