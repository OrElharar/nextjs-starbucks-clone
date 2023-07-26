export interface IBanner {
    id: string;
    callToActionText: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    backgroundColor: string;
}

export const mockBanners: IBanner[] = [
    {
        id: '1',
        callToActionText: 'Order now',
        imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84927.jpg',
        imageAlt: 'Frozen blended drink with colorful swirls in a tall glass',
        title: 'Tropical cooldown',
        description: "Kick back with our vibrant new Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage.",
        backgroundColor: '#eb81a5'
    },{
        id: '2',
        callToActionText: 'Join for free',
        imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84954.jpg',
        imageAlt: "SUMMER WINSDAYS logo on a multi-colored background with a frozen refresher.",
        title: 'Now 50% off cold drinks',
        description: "WinsDays just got even cooler for Starbucks® Rewards members. Now enjoy 50% off a cold drink on Wednesdays after 12 p.m.*",
        backgroundColor: '#e5ff67'
    }]
