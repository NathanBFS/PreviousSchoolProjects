//
//  ViewController.m
//  Panda Factory
//
//  Created by Nathan Buth on 9/27/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    self.view.backgroundColor = [UIColor colorWithRed:0.071 green:0.263 blue:0.122 alpha:1]; /*#12431f*/
    
    //create Brewmaster Monk
    brewmaster *createBrewmaster = (brewmaster*)[pandaFactory createNewPanda:BREWMASTER];
    [createBrewmaster setAlcoholLevel:.19];
    
    if (createBrewmaster != nil){
        
        NSString *brewmasterInventory = @"Keg of Pandaren Brew";
        [createBrewmaster setConsumableInventory:brewmasterInventory];
        
        NSString *brewmasterSpecialization = @"Tank";
        [createBrewmaster setSpecialization:brewmasterSpecialization];
        
        [createBrewmaster calculateAverageDPS];
        
    }
    
    brewmasterInfo = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 30.0f, 300.0f, 55.0f)];
    brewmasterInfo.text = [NSString stringWithFormat:@"You have created a Brewmaster Monk! Brewmasters specialize as a %@, and often carry a %@.", [createBrewmaster specialization], [createBrewmaster consumableInventory]];
    brewmasterInfo.font = [UIFont systemFontOfSize:14.0];
    brewmasterInfo.numberOfLines = 3;
    brewmasterInfo.textAlignment = NSTextAlignmentCenter;
    brewmasterInfo.backgroundColor = [UIColor colorWithRed:0.957 green:0.761 blue:0.125 alpha:1]; /*#f4c220*/
    [self.view addSubview:brewmasterInfo];
    
    brewmasterInfo2 = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 95.0f, 300.0f, 55.0f)];
    brewmasterInfo2.text = [NSString stringWithFormat:@"The Brewmaster's blood-alcohol level of %f increases his damage, giving him an average DPS of %i.", [createBrewmaster alcoholLevel],[createBrewmaster averageDPS]];
    brewmasterInfo2.font = [UIFont systemFontOfSize:14.0];
    brewmasterInfo2.numberOfLines = 3;
    brewmasterInfo2.textAlignment = NSTextAlignmentCenter;
    brewmasterInfo2.backgroundColor = [UIColor colorWithRed:0.957 green:0.761 blue:0.125 alpha:1]; /*#f4c220*/
    [self.view addSubview:brewmasterInfo2];
    
    //create Mistweaver Monk
    mistweaver *createMistweaver = (mistweaver*)[pandaFactory createNewPanda:MISTWEAVER];
    [createMistweaver setGroup:MEDIUM];
    [createMistweaver setTimeHealing:.9];
    [createMistweaver setTimeAttacking:.1];
    
    if (createMistweaver != nil){
        
        NSString *mistweaverInventory = @"Vial of Healing Mists";
        [createMistweaver setConsumableInventory:mistweaverInventory];
        
        NSString *mistweaverSpecialization = @"Healer";
        [createMistweaver setSpecialization:mistweaverSpecialization];
        
        [createMistweaver calculateAverageDPS];
        
    }
    
    mistweaverInfo = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 170.0f, 300.0f, 55.0f)];
    mistweaverInfo.text = [NSString stringWithFormat:@"You have created a Mistweaver Monk! Mistweavers specialize as a %@, and often carry a %@.", [createMistweaver specialization], [createMistweaver consumableInventory]];
    mistweaverInfo.font = [UIFont systemFontOfSize:14.0];
    mistweaverInfo.numberOfLines = 3;
    mistweaverInfo.textAlignment = NSTextAlignmentCenter;
    mistweaverInfo.backgroundColor = [UIColor colorWithRed:0.047 green:0.675 blue:0.039 alpha:1]; /*#0caca*/
    [self.view addSubview:mistweaverInfo];
    
    mistweaverInfo2 = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 235.0f, 300.0f, 55.0f)];
    mistweaverInfo2.text = [NSString stringWithFormat:@"The Mistweaver focuses on healing %f percent of the time when in a group, giving them an average DPS of %i.", [createMistweaver timeHealing], [createMistweaver averageDPS]];
    mistweaverInfo2.font = [UIFont systemFontOfSize:14.0];
    mistweaverInfo2.numberOfLines = 3;
    mistweaverInfo2.textAlignment = NSTextAlignmentCenter;
    mistweaverInfo2.backgroundColor = [UIColor colorWithRed:0.047 green:0.675 blue:0.039 alpha:1]; /*#0caca*/
    [self.view addSubview:mistweaverInfo2];
    
    //create Windwalker Monk
    windwalker *createWindwalker = (windwalker*)[pandaFactory createNewPanda:WINDWALKER];
    [createWindwalker setChiLevel:3];
    [createWindwalker setEnergyLevel:47];
    [createWindwalker setBeastness:1542];
    
    if (createWindwalker != nil){
        
        NSString *windwalkerInventory = @"Potion of the Aspects Haste";
        [createWindwalker setConsumableInventory:windwalkerInventory];
        
        NSString *windwalkerSpecialization = @"Melee DPS";
        [createWindwalker setSpecialization:windwalkerSpecialization];
        
        [createWindwalker calculateAverageDPS];
        
    }
    
    windwalkerInfo = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 310.0f, 300.0f, 55.0f)];
    windwalkerInfo.text = [NSString stringWithFormat:@"You have created a Windwalker Monk! Windwalkers specialize as a %@, and often carry a %@.", [createWindwalker specialization], [createWindwalker consumableInventory]];
    windwalkerInfo.font = [UIFont systemFontOfSize:14.0];
    windwalkerInfo.numberOfLines = 3;
    windwalkerInfo.textAlignment = NSTextAlignmentCenter;
    windwalkerInfo.backgroundColor = [UIColor colorWithRed:0.196 green:0.659 blue:0.545 alpha:1]; /*#32a88b*/
    [self.view addSubview:windwalkerInfo];
    
    windwalkerInfo2 = [[UILabel alloc]initWithFrame:CGRectMake(10.0f, 375.0f, 300.0f, 55.0f)];
    windwalkerInfo2.text = [NSString stringWithFormat:@"Windwalkers are beast when it comes to damage and deal out an extra %i, giving them and average DPS of %i", [createWindwalker beastness],[createWindwalker averageDPS]];
    windwalkerInfo2.font = [UIFont systemFontOfSize:14.0];
    windwalkerInfo2.numberOfLines = 3;
    windwalkerInfo2.textAlignment = NSTextAlignmentCenter;
    windwalkerInfo2.backgroundColor = [UIColor colorWithRed:0.196 green:0.659 blue:0.545 alpha:1]; /*#32a88b*/
    [self.view addSubview:windwalkerInfo2];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
