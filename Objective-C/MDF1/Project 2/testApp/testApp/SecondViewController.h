//
//  SecondViewController.h
//  testApp
//
//  Created by Nathan Buth on 11/2/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "DetailViewController.h"

@interface SecondViewController : UIViewController
{
    IBOutlet UITableView *theTableView;
    IBOutlet NSMutableArray *titleArray;
    IBOutlet NSMutableArray *categoryArray;
    IBOutlet NSMutableArray *descriptionArray;
    IBOutlet DetailViewController *detailView;
}

@property (strong, nonatomic) NSMutableArray *titleArray;
@property (strong, nonatomic) NSMutableArray *categoryArray;
@property (nonatomic, retain) DetailViewController *detailView;
@end
