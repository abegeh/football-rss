import * as iots from 'io-ts'
export const sourceType = iots.interface({
    source: iots.string,
    link: iots.string,
    lang: iots.string,
    logo: iots.string,
    type: iots.string,
    parser: iots.any
})

export type SourceInterface = iots.TypeOf<typeof sourceType>

export const feedDetailType = iots.interface({
    mediaUrl: iots.string,
    contentEncoded: iots.string
})

export type FeedDetail = iots.TypeOf<typeof feedDetailType>

export const apiKey = {
    "project_info": {
      "project_number": "277497724341",
      "firebase_url": "https://football-feed.firebaseio.com",
      "project_id": "football-feed",
      "storage_bucket": "football-feed.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:277497724341:android:7100d21432d1ed3d13edfc",
          "android_client_info": {
            "package_name": "com.abegeh.diavolo_milan"
          }
        },
        "oauth_client": [
          {
            "client_id": "277497724341-itkgesbdpagbmvc5lgcdsgpnamof0jqe.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyCuAX1nErgqZ8sWI5yzlbEZlT2TZDXrXuw"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "277497724341-itkgesbdpagbmvc5lgcdsgpnamof0jqe.apps.googleusercontent.com",
                "client_type": 3
              }
            ]
          }
        }
      },
      {
        "client_info": {
          "mobilesdk_app_id": "1:277497724341:android:bdce7f4b10d9d53113edfc",
          "android_client_info": {
            "package_name": "com.abegeh.pazza_inter"
          }
        },
        "oauth_client": [
          {
            "client_id": "277497724341-itkgesbdpagbmvc5lgcdsgpnamof0jqe.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyCuAX1nErgqZ8sWI5yzlbEZlT2TZDXrXuw"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "277497724341-itkgesbdpagbmvc5lgcdsgpnamof0jqe.apps.googleusercontent.com",
                "client_type": 3
              }
            ]
          }
        }
      }
    ],
    "configuration_version": "1"
  }