//
//  ThirdViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ThirdViewController.h"
#import <MapKit/MapKit.h>
#import "FirstViewController.h"
#import "MyMapAnnotation.h"
#import "AppDelegate.h"

@interface ThirdViewController ()

@end

@implementation ThirdViewController
@synthesize detailedMapView;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (IBAction)mapIt:(CLLocationCoordinate2D)coord title:(NSString *)title
{
    NSString *longitudeCoordinates = [[NSString alloc]initWithFormat:@"Longitude: %f", coord.longitude];
    NSString *latitudeCoordinates = [[NSString alloc]initWithFormat:@"Latitude: %f", coord.latitude];
        
    nameLabel.text = title;
    longitudeLabel.text = longitudeCoordinates;
    latitudeLabel.text = latitudeCoordinates;
    
    self.detailedMapView.delegate = (id)self;
    
    self.title = title;
    
    
    CLLocationCoordinate2D location;
    location.latitude = coord.latitude;
    location.longitude = coord.longitude;
	
	passAnnotation = [[MyMapAnnotation alloc] init];
    passAnnotation.title = title;
	//passAnnotation.coordinate = location;
    //The above line is commented out because for some reason it keeps the app from working.  I have been unable to figure out why.
    
    [detailedMapView addAnnotation:passAnnotation];
}

- (void)viewDidLoad
{
    [super viewDidLoad];    
}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"Details";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0 green:0.2 blue:0 alpha:1]; /*#003300*/
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
