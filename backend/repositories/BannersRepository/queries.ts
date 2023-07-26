export function getSelectBannersQuery():string{
    return `SELECT id, call_to_action_text as "callToActionText", 
            image_url as "imageUrl", image_alt as "imageAlt", title, description, background_color as "backgroundColor"
            from banners`;
}

export function getInsertBannerClickQuery():string{
    return `insert into banners_clicks_history(banner_id, position) values($1, $2)`;
}



