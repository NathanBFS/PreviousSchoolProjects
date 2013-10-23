//
//  FirstViewController.m
//  testApp
//
//  Created by Nathan Buth on 11/8/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "AppDelegate.h"
#import "MyMapAnnotation.h"

@interface FirstViewController ()

@end

@implementation FirstViewController

@synthesize locationsArray;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"Home", @"Home");
        self.tabBarItem.image = [UIImage imageNamed:@"first"];
    }
    return self;
}

- (void)viewDidLoad
{
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [appDelegate getArray];
    locationsArray = appDelegate.mainArray;
    
    CLLocationCoordinate2D mountainviewLocation;
    mountainviewLocation.latitude = 37.423156f;
    mountainviewLocation.longitude = -122.084917f;
    
    CLLocationCoordinate2D atlantaLocation;
    atlantaLocation.latitude = 33.781484f;
    atlantaLocation.longitude = -84.387392f;
    
    CLLocationCoordinate2D austinLocation;
    austinLocation.latitude = 30.386272f;
    austinLocation.longitude = -97.736708f;
    
    CLLocationCoordinate2D boulderLocation;
    boulderLocation.latitude = 40.021563f;
    boulderLocation.longitude = -105.261166f;
    
    CLLocationCoordinate2D chicagoLocation;
    chicagoLocation.latitude = 41.889244f;
    chicagoLocation.longitude = -87.628756f;
    
    CLLocationCoordinate2D detroitLocation;
    detroitLocation.latitude = 42.548133f;
    detroitLocation.longitude = -83.215578f;
    
    CLLocationCoordinate2D newyorkLocation;
    newyorkLocation.latitude = 40.741962f;
    newyorkLocation.longitude = -74.004624f;
    
    CLLocationCoordinate2D sanfranciscoLocation;
    sanfranciscoLocation.latitude = 37.789904f;
    sanfranciscoLocation.longitude = -122.390576f;
    
    CLLocationCoordinate2D seattleLocation;
    seattleLocation.latitude = 47.649041f;
    seattleLocation.longitude = -122.350509f;
    
    CLLocationCoordinate2D washingtondcLocation;
    washingtondcLocation.latitude = 38.901654f;
    washingtondcLocation.longitude = -77.027636f;
    
    MyMapAnnotation *annotation1 = [[MyMapAnnotation alloc] initWithTitle: @"Mountain View" coord:mountainviewLocation];
    
    MyMapAnnotation *annotation2 = [[MyMapAnnotation alloc] initWithTitle: @"Atlanta" coord:atlantaLocation];
    
    MyMapAnnotation *annotation3 = [[MyMapAnnotation alloc] initWithTitle: @"Austin" coord:austinLocation];
    
    MyMapAnnotation *annotation4 = [[MyMapAnnotation alloc] initWithTitle: @"Boulder" coord:boulderLocation];
    
    MyMapAnnotation *annotation5 = [[MyMapAnnotation alloc] initWithTitle: @"Chicago" coord:chicagoLocation];
    
    MyMapAnnotation *annotation6 = [[MyMapAnnotation alloc] initWithTitle: @"Detroit" coord:detroitLocation];
    
    MyMapAnnotation *annotation7 = [[MyMapAnnotation alloc] initWithTitle: @"New York" coord:newyorkLocation];
    
    MyMapAnnotation *annotation8 = [[MyMapAnnotation alloc] initWithTitle: @"San Francisco" coord:sanfranciscoLocation];
    
    MyMapAnnotation *annotation9 = [[MyMapAnnotation alloc] initWithTitle: @"Seattle" coord:seattleLocation];
    
    MyMapAnnotation *annotation10 = [[MyMapAnnotation alloc] initWithTitle: @"Washington D.C." coord:washingtondcLocation];
    
    [locationsArray addObject:annotation1];
    [locationsArray addObject:annotation2];
    [locationsArray addObject:annotation3];
    [locationsArray addObject:annotation4];
    [locationsArray addObject:annotation5];
    [locationsArray addObject:annotation6];
    [locationsArray addObject:annotation7];
    [locationsArray addObject:annotation8];
    [locationsArray addObject:annotation9];
    [locationsArray addObject:annotation10];
            
    [super viewDidLoad];
    
    self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemEdit target:self action:@selector(edit)];
}

-(void)edit
{
    if(myTableView.editing == false)
    {
        [myTableView setEditing:true];
    }
    else if(myTableView.editing == true)
    {
        [myTableView setEditing:false];
    }

}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"Home";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0 green:0.2 blue:0 alpha:1]; /*#003300*/
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return locationsArray.count;
}


//Populates cells
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [myTableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil)
    {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier];
    }
    
    MyMapAnnotation *location = [locationsArray objectAtIndex:indexPath.row];
    cell.textLabel.text = location.title;
    
    return cell;
}

-(void)tableView:(UITableView*)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete)
    {
        
        NSLog(@"delete row %d", indexPath.row);
        
        [locationsArray removeObjectAtIndex:indexPath.row];
        
        [myTableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath]withRowAnimation:true];
        locationsArray = locationsArray;        
    }
}

//Moves you to the Detail View
-(void)tableView:(UITableView*)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    ThirdViewController *viewController = [[ThirdViewController alloc]initWithNibName:@"ThirdViewController" bundle:nil];
    
    if (viewController != nil)
    {
        [self.navigationController pushViewController:viewController animated:YES];
        MyMapAnnotation *locate = [locationsArray objectAtIndex:indexPath.row];
        [viewController mapIt:locate.coordinate title:locate.title];
    }
}

@end
