//
//  ViewController.m
//  testApp
//
//  Created by Nathan Buth on 10/11/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"
#import "secondViewController.h"

@interface ViewController ()

@end

@implementation ViewController

//Go to Add Events Page
//Switches to the view where you can add events
-(IBAction)addEventPage:(id)sender
{
    secondViewController *viewController = [[secondViewController alloc]initWithNibName:@"secondViewController" bundle:nil];
    
    viewController.delegate = self;
    
    if (viewController != nil)
    {
        [self presentViewController:viewController animated:TRUE completion:nil];
    }
}
//End Go to Add Events Page

-(void)eventSave:(NSString*)theEvent
{
    plannedEvents.text = [plannedEvents.text stringByAppendingString:theEvent];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
