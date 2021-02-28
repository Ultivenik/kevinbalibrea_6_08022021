import Media from "./Media";

export default class MediaFactory{
    static create(mediaInfo)
    {
        let media = new Media(mediaInfo)
        photoPath = mediaInfo.photoPath
        id = mediaInfo.id
        photographerId = mediaInfo.photographerId
        tags = mediaInfo.tags
        likes = mediaInfo.likes
        date = mediaInfo.date
        price = mediaInfo.price

        switch (photographerId) {
            case 243:
                image = photoPath + 'Mimi/' + mediaInfo.image
                video = photoPath +'Mimi/' + mediaInfo.video
                break;
            case 930:
                image = photoPath + 'Ellie Rose/' + mediaInfo.image
                video = photoPath +'Ellie Rose/' + mediaInfo.video
                break;
            case 82:
                image = photoPath + 'Tracy/' + mediaInfo.image
                video = photoPath +'Tracy/' + mediaInfo.video
                break;
            case 527:
                image = photoPath + 'Nabeel/' + mediaInfo.image
                video = photoPath +'Nabeel/' + mediaInfo.video
                break;
            case 925:
                image = photoPath + 'Rhode/' + mediaInfo.image
                video = photoPath +'Rhode/' + mediaInfo.video
                break;
            case 195:
                image = photoPath + 'Marcel/' + mediaInfo.image
                video = photoPath +'Marcel/' + mediaInfo.video
                break;
            default:
                break;
        }

        return media
    }

}