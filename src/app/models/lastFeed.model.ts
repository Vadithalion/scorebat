export class LastFeedModel {
    response : [
        title: string,
        competition: string,
        matchviewUrl: string,
        competitionUrl: string,
        thumbnail: string,
        date: string,
        videos: {
            id: string,
            title: string,
            embed: string
        }
    ]
}