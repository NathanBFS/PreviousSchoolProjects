//
//  CustomTableCell.m
//  testApp
//
//  Created by Nathan Buth on 11/1/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "CustomTableCell.h"

@implementation CustomTableCell

@synthesize titleLabel, categoryLabel;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if (self) {
        // Initialization code
    }
    return self;
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated
{
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
