//
//  tableViewController.h
//  testApp
//
//  Created by Nathan Buth on 10/25/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface tableViewController : UIViewController <UITableViewDelegate>
{
    IBOutlet UILabel *heading;
    IBOutlet UILabel *backSwipe;
    IBOutlet UILabel *editButton;
    IBOutlet UITableView *theTableView;
    
    NSMutableArray *titleArray;
    NSMutableArray *categoryArray;
    
    UISwipeGestureRecognizer *leftSwiper;//Left swipe gesture
    UISwipeGestureRecognizer *rightSwiper;//Right swipe gesture
}
@end
