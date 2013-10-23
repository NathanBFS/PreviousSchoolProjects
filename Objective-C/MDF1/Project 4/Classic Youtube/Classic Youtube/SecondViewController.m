//
//  SecondViewController.m
//  Classic Youtube
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"

@interface SecondViewController ()

@end

@implementation SecondViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"Second", @"Second");
        self.tabBarItem.image = [UIImage imageNamed:@"second"];
    }
    return self;
}
							
- (void)viewDidLoad
{
    xmlURL = [[NSURL alloc] initWithString:@"http://dl.dropbox.com/u/91577977/videos.xml"];
    xmlURLRequest = [[NSURLRequest alloc] initWithURL:xmlURL];
    if (xmlURLRequest != nil)
    {
        xmlURLConnection = [[NSURLConnection alloc] initWithRequest:xmlURLRequest delegate:self];
    }
    if (!myWebView.canGoBack)
    {
        backButton.enabled = false;
    }
    myWebView.scalesPageToFit = YES;
    [myWebView loadRequest:xmlURLRequest];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

-(IBAction)onClick:(id)sender
{
    UIBarButtonItem *item = (UIBarButtonItem*)sender;
    if (item.tag == 0)
    {
        if (myWebView.canGoBack)
        {
            [myWebView goBack];
            
            backButton.enabled = (myWebView.canGoBack);
        }
    }
}

- (void)webViewDidFinishLoad:(UIWebView *)webView
{
    backButton.enabled = (myWebView.canGoBack);
}

-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"XML Text";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0.565 green:0 blue:0 alpha:1]; /*#900000*/
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
