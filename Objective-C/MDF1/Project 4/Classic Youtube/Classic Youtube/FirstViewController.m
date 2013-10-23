//
//  FirstViewController.m
//  Classic Youtube
//
//  Created by Nathan Buth on 11/15/12.
//  Copyright (c) 2012 Nathan Buth. All rights reserved.
//

#import "AppDelegate.h"
#import "FirstViewController.h"
#import "SecondViewController.h"
#import "ThirdViewController.h"
#import "listDetails.h"

@interface FirstViewController ()

@end

@implementation FirstViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"First", @"First");
        self.tabBarItem.image = [UIImage imageNamed:@"first"];
    }
    return self;
}
							
- (void)viewDidLoad
{
    items = 0;
    videosArray = [[NSMutableArray alloc] init];
    xmlURL = [[NSURL alloc] initWithString:@"http://dl.dropbox.com/u/91577977/videos.xml"];
    xmlURLRequest = [[NSURLRequest alloc] initWithURL:xmlURL];
    if (xmlURLRequest != nil)
    {
        xmlURLConnection = [[NSURLConnection alloc] initWithRequest:xmlURLRequest delegate:self];
        
        getData = [NSMutableData data];
    }
    NSData *xmlData = [self GetFileDataFromFile:@"videos.xml"];
    NSXMLParser *parser = [[NSXMLParser alloc] initWithData:xmlData];
    if (parser != nil)
    {
        [parser setDelegate:self];
        [parser parse];
    }

    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)parser:(NSXMLParser *)parser didStartElement:(NSString *)elementName namespaceURI:(NSString *)namespaceURI qualifiedName:(NSString *)qName attributes:(NSDictionary *)attributeDict
{
    if ([elementName isEqualToString:@"VideosList"])
    {
        NSString *itemsString = [attributeDict valueForKey:@"items"];
        if (itemsString != nil)
        {
            items = [itemsString intValue];
        }
    }
    else if ([elementName isEqualToString:@"MyVideos"])
    {
        NSString *name = [attributeDict valueForKey:@"Name"];
        NSString *type = [attributeDict valueForKey:@"Type"];
        listDetails *item = [[listDetails alloc] initWithName:name theType:type ];
        if (item != nil)
        {
            [videosArray addObject:item];
        }
    }
}

- (NSData*)GetFileDataFromFile:(NSString*)filename
{
    NSString *filePath = nil;
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    filePath = [documentsDirectory stringByAppendingPathComponent:filename];
    if ([fileManager fileExistsAtPath:filePath])
    {
        return  [NSData dataWithContentsOfFile:filePath];
    }
    return nil;
}

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data
{
    if (data != nil)
    {
        [getData appendData:data];
    }
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection
{
    NSString *requestString = [[NSString alloc] initWithData:getData encoding:NSASCIIStringEncoding];
    if (requestString != nil)
    {
        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
        NSString *documentsDirectory = [paths objectAtIndex:0];
        if (documentsDirectory !=nil)
        {
            NSString *fullPath = [[NSString alloc] initWithFormat:@"%@/%@",documentsDirectory, @"videos.xml"];
            if (fullPath != nil)
            {
                [getData writeToFile:fullPath atomically:true];
            }
        }
    }
}


-(void)viewDidAppear:(BOOL)animated
{
    self.title = @"Videos";
    self.navigationController.navigationBar.tintColor = [UIColor colorWithRed:0.565 green:0 blue:0 alpha:1]; /*#900000*/
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return videosArray.count;
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
    
    listDetails *videoTitle = [videosArray objectAtIndex:indexPath.row];
    NSString *title = [videoTitle valueForKey:@"Name"];
    NSLog(@"%@",title);
	cell.textLabel.text = title;
    //MyMapAnnotation *video = [locationsArray objectAtIndex:indexPath.row];
    //cell.textLabel.text = video.title;
    
    return cell;
}


//Moves you to the Detail View
-(void)tableView:(UITableView*)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    ThirdViewController *viewController = [[ThirdViewController alloc]initWithNibName:@"ThirdViewController" bundle:nil];
    
    if (viewController != nil)
    {
        [self.navigationController pushViewController:viewController animated:YES];
        listDetails *videoTitle = [videosArray objectAtIndex:indexPath.row];
        NSString *title = [videoTitle valueForKey:@"Name"];
        NSString *description = [videoTitle valueForKey:@"Type"];
        NSLog(@"passed %@",title);
        NSLog(@"passed %@",description);
        [viewController passName:title type:description ];
        //MyMapAnnotation *locate = [locationsArray objectAtIndex:indexPath.row];
        //[viewController mapIt:locate.coordinate title:locate.title];
    }
}

@end
