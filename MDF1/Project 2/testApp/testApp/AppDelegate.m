//
//  AppDelegate.m
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "AppDelegate.h"

#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "CategoryViewController.h"
#import "DetailViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]] autorelease];
    // Override point for customization after application launch.
    ViewController *viewController1 = [[FirstViewController alloc] initWithNibName:@"FirstViewController" bundle:nil];
    ViewController *viewController2 = [[SecondViewController alloc] initWithNibName:@"SecondViewController" bundle:nil];
    ViewController *viewController3 = [[ThirdViewController alloc] initWithNibName:@"ThirdViewController" bundle:nil];
    ViewController *viewController4 = [[CategoryViewController alloc] initWithNibName:@"CategoryViewController" bundle:nil];
    ViewController *viewController5 = [[DetailViewController alloc] initWithNibName:@"DetailViewController" bundle:nil];
    
    self.tabBarController = [[UITabBarController alloc] init];
    
    UINavigationController *navController1 = [[UINavigationController alloc]initWithRootViewController:viewController1];
    UINavigationController *navController2 = [[UINavigationController alloc]initWithRootViewController:viewController2];
    UINavigationController *navController3 = [[UINavigationController alloc]initWithRootViewController:viewController3];
    UINavigationController *navController4 = [[UINavigationController alloc]initWithRootViewController:viewController4];
    UINavigationController *navController5 = [[UINavigationController alloc]initWithRootViewController:viewController5];
    
    self.tabBarController.viewControllers = @[navController1, navController2, navController3];
    self.window.rootViewController = self.tabBarController;
    [self.window makeKeyAndVisible];
    
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
