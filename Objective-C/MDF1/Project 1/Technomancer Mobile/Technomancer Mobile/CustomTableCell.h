//
//  CustomTableCell.h
//  testApp
//
//  Created by Nathan Buth on 11/1/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CustomTableCell : UITableViewCell
{
    IBOutlet UILabel *titleLabel;
    IBOutlet UILabel *categoryLabel;
}

@property (strong, nonatomic)IBOutlet UILabel *titleLabel;
@property (strong, nonatomic)IBOutlet UILabel *categoryLabel;

@end
