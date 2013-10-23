//
//  AppDelegate.m
//  AOC1 Project 1
//
//  Created by Nathan Buth on 8/2/12.
//  Copyright (c) 2012 Full Sail University. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate

@synthesize window = _window;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    
    
    //Canabalt!
    //I do not own rights to the game Canabalt, my story is just based off of it.
    
    //Variables
    int gamingSkills = arc4random() % 10;
    int skillsBonus = 0;
    int runSpeed = 10;
    int numberOfDeadMechs = 0;
    float buildingGap = 14.5f;
    bool stillAlive = YES;
    bool mechsAttacking = YES;
    bool justStarted = YES;
    bool epicGamer = NO;
    bool hitBox = NO;
    //End Variables
    
    //Start Story
    NSLog(@"Immediately following a loud explosion chaos out breaks in the city.  You at first think that an earthquake has hit but change your mind as you look out the window of your office and see a huge mechanical being headed your way.  You grab your mp3 player, turn it onto your favorite song, run down the hall away from the mech and jump out the window.  Hoping that you make it to the next building.");
    
    while(stillAlive && mechsAttacking){ 
    
        if((stillAlive && mechsAttacking) || justStarted == YES){//or justStarted in place to make sure this function only fires once 
            if (gamingSkills >= 9){
                epicGamer = YES;
                skillsBonus = 5;
                NSLog(@"You are an epic gamer, have a +5 skills bonus!");
                justStarted=NO;//Make justStarted false so that this function will not continue to fire
            }else {
                epicGamer = NO;
                skillsBonus = 2;
                NSLog(@"You are decent at this game but... Only +2 skills bonus for you!");
                justStarted=NO;//Make justStarted false so that this function will not continue to fire
            }//Determine if the player has skills or not
        } else {
            NSLog(@"Number of skill bonus: %d.", skillsBonus);
        }
        
        for (int i=1; i<=runSpeed; i++){//First for loop, runs until the player trips
            int chanceOfTripping = (arc4random() % 101) % 5;
            //NSLog(@"The chance of tripping is: %d.", chanceOfTripping);//Used to see the numbers showing for chanceOfTripping
            int chanceOfAttackEnding = (arc4random() % 101) % 5;
            //NSLog(@"The chance of the attack ending is: %d.", chanceOfAttackEnding);//Used to see the numbers showing for chanceOfAttackEnding
            if (chanceOfTripping == 0){
                hitBox=YES;
                NSLog(@"You run into a box and your speed slows down to %d.", (int)runSpeed - 7);
                runSpeed=3;
            } else {
                hitBox=NO;
                NSLog(@"You keep running, managing to dodge any obstacles in your path and maintain your speed.");
            }
            for (int j=3; j == runSpeed; j++){//Nested for loop, fires once the player trips and determines said player's fate
                NSLog(@"Time to jump!");
                NSLog(@"The gap between buildings is %.2f feet across, hopefully you can jump %d feet!", buildingGap,(int)buildingGap + 1);
                if (skillsBonus >= 5){
                    stillAlive=YES;
                    NSLog(@"You make it to the next building top and manage to escape from the mechs.");//Hooray, you survived!!!
                } else if(chanceOfAttackEnding == 0){
                    mechsAttacking=NO;
                    NSLog(@"You just manage to catch the ledge, but thankfully the mechs have been defeated.  You pull yourself up slowly, realizing that if they had not been destroyed you would be dead.");//Congrats on outliving the mechs!!!
                } else {
                    stillAlive=NO;
                    NSLog(@"You hit the wall of a building and fall to your death.");//Not a very good situation to be in...
                }
            }//End nested for loop          
        }//End first for loop
    }//End while loop
    while(numberOfDeadMechs < 10){
        NSLog(@"Number of mechs killed during game: %d\n.", numberOfDeadMechs);
        numberOfDeadMechs++;
    }//Number of mechs that died while you played.
    //End Story
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
