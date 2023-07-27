export function getTablesCreationScript():string{
    return `
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        hashed_password VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
    ); 
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    create table IF NOT EXISTS banners(
        id UUID primary key default uuid_generate_v4(),
        call_to_action_text varchar(255) not null,
        image_url varchar(255) not null,
        image_alt varchar(255) not null,
        title varchar(255) not null,
        description varchar(255) not null,
        background_color varchar(255) not null
    );
    
    create table IF NOT EXISTS banners_clicks_history(
        banner_id UUID not null,
        position integer not null,
        created_at TIMESTAMP NOT NULL DEFAULT timezone('UTC'::TEXT, NOW()),
        foreign key (banner_id) references banners(id)
    );
    `
}


// Dummy data:
// insert into banners(call_to_action_text, image_url, image_alt, title, description, background_color)
// values('Order now', 'https://starbucks-clone.s3.eu-west-1.amazonaws.com/tropical_cooldown.jpg', 'Frozen blended drink with colorful swirls in a tall glass', 'Tropical cooldown', 'Kick back with our vibrant new Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage.', '#eb81a5'),
// ('Join for free', 'https://starbucks-clone.s3.eu-west-1.amazonaws.com/summer_windays.jpg', 'SUMMER WINSDAYS logo on a multi-colored background with a frozen refresher.', 'Now 50% off cold drinks', 'WinsDays just got even cooler for Starbucks® Rewards members. Now enjoy 50% off a cold drink on Wednesdays after 12 p.m.*', '#e5ff67'),
// ('Order now', 'https://starbucks-clone.s3.eu-west-1.amazonaws.com/summer_to_the_max.jpg', '2 cold smoothies', 'Summer to the max', 'Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino® blended beverage.', '#8f8bf4'),
// ('Order now', 'https://starbucks-clone.s3.eu-west-1.amazonaws.com/follow_the_buzz.webp', 'Candy', 'Follow the buzz', 'This adorable Bumblebee Cake Pop dipped in chocolatey icing has landed.', '#f1ff67'),
// ('Listen now', 'https://starbucks-clone.s3.eu-west-1.amazonaws.com/be_kind.jpg', 'cup of coffee', 'Be kind to your mind', 'We teamed up with Headspace to bring you four free meditations on kindness, plus a special offer for Starbucks® Rewards members—discover more mindfulness with a two-month free membership.**', '#e1fccd');
