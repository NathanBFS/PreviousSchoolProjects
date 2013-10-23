//
//  SecondViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "SecondViewController.h"
#import "FirstViewController.h"
#import "ThirdViewController.h"
#import "AppDelegate.h"
#import "MyMapAnnotation.h"

@interface SecondViewController ()

@end

@implementation SecondViewController
@synthesize one, two, three, four, five, six, seven, eight, nine, ten, arrayName, arrayLocation, mapView;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"Map View", @"Map View");
        self.tabBarItem.image = [UIImage imageNamed:@"second"];
    }
    return self;
}

- (void)viewDidLoad
{
    MKCoordinateSpan span;
    span.latitudeDelta=50.0f;
    span.longitudeDelta=50.0f;
    
    CLLocationCoordinate2D location;
    location.latitude = 39.749997f;
    location.longitude = -97.668945f;
    
    MKCoordinateRegion region;
    region.center = location;
    region.span = span;
    mapView.region = region;
        
    self.mapView.delegate = self;
        
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [appDelegate mainArray];
    arrayLocation = appDelegate.mainArray;
    
    [mapView removeAnnotations:mapView.annotations];
    for (int i = 0; arrayLocation.count > i; i++)
    {
        MyMapAnnotation *theLocation = [arrayLocation objectAtIndex:i];
        [mapView addAnnotation:theLocation];
    }
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"Map View";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0 green:0.2 blue:0 alpha:1]; /*#003300*/
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
