const TEST_PCO_PLANS = {
  "links": {
    "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans?filter=future&per_page=2",
    "next": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans?filter=future&offset=2&per_page=2"
  },
  "data": [{
      "type": "Plan",
      "id": "38402157",
      "attributes": {
        "created_at": "2018-09-22T11:17:18Z",
        "dates": "October 28, 2018",
        "files_expire_at": "2018-11-12T13:30:00Z",
        "items_count": 10,
        "last_time_at": "2018-10-28T13:30:00Z",
        "multi_day": false,
        "needed_positions_count": 2,
        "other_time_count": 6,
        "permissions": "Editor",
        "plan_notes_count": 0,
        "plan_people_count": 14,
        "public": false,
        "rehearsal_time_count": 1,
        "series_title": "Weekend Service - Berlin",
        "service_time_count": 2,
        "short_dates": "Oct 28",
        "sort_date": "2018-10-28T10:00:00Z",
        "title": "\"Upward, Inward, Outward\" (Daniel Fusco)",
        "total_length": 647,
        "updated_at": "2018-10-23T19:10:07Z"
      },
      "relationships": {
        "service_type": {
          "data": {
            "type": "ServiceType",
            "id": "309883"
          }
        },
        "next_plan": {
          "data": {
            "type": "Plan",
            "id": "38579002"
          }
        },
        "previous_plan": {
          "data": {
            "type": "Plan",
            "id": "38402156"
          }
        },
        "attachment_types": {
          "data": []
        },
        "series": {
          "data": {
            "type": "Series",
            "id": "258383"
          }
        },
        "created_by": {
          "data": {
            "type": "Person",
            "id": "11534642"
          }
        },
        "updated_by": {
          "data": {
            "type": "Person",
            "id": "11534642"
          }
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38402157"
      }
    },
    {
      "type": "Plan",
      "id": "38579002",
      "attributes": {
        "created_at": "2018-10-02T20:53:30Z",
        "dates": "November 4, 2018",
        "files_expire_at": "2018-11-19T13:30:00Z",
        "items_count": 10,
        "last_time_at": "2018-11-04T13:30:00Z",
        "multi_day": false,
        "needed_positions_count": 5,
        "other_time_count": 6,
        "permissions": "Editor",
        "plan_notes_count": 0,
        "plan_people_count": 14,
        "public": false,
        "rehearsal_time_count": 1,
        "series_title": "Weekend Service - Berlin",
        "service_time_count": 2,
        "short_dates": "Nov 4",
        "sort_date": "2018-11-04T10:00:00Z",
        "title": "Buddy Owens (live)",
        "total_length": 707,
        "updated_at": "2018-10-23T19:18:12Z"
      },
      "relationships": {
        "service_type": {
          "data": {
            "type": "ServiceType",
            "id": "309883"
          }
        },
        "next_plan": {
          "data": {
            "type": "Plan",
            "id": "38579296"
          }
        },
        "previous_plan": {
          "data": {
            "type": "Plan",
            "id": "38402157"
          }
        },
        "attachment_types": {
          "data": [{
              "type": "AttachmentType",
              "id": "206"
            },
            {
              "type": "AttachmentType",
              "id": "38817"
            },
            {
              "type": "AttachmentType",
              "id": "208"
            },
            {
              "type": "AttachmentType",
              "id": "240"
            },
            {
              "type": "AttachmentType",
              "id": "207"
            },
            {
              "type": "AttachmentType",
              "id": "7396"
            },
            {
              "type": "AttachmentType",
              "id": "7397"
            },
            {
              "type": "AttachmentType",
              "id": "267"
            },
            {
              "type": "AttachmentType",
              "id": "38819"
            },
            {
              "type": "AttachmentType",
              "id": "38821"
            },
            {
              "type": "AttachmentType",
              "id": "38823"
            },
            {
              "type": "AttachmentType",
              "id": "243"
            },
            {
              "type": "AttachmentType",
              "id": "209"
            },
            {
              "type": "AttachmentType",
              "id": "237"
            },
            {
              "type": "AttachmentType",
              "id": "38825"
            },
            {
              "type": "AttachmentType",
              "id": "7401"
            }
          ]
        },
        "series": {
          "data": {
            "type": "Series",
            "id": "258383"
          }
        },
        "created_by": {
          "data": {
            "type": "Person",
            "id": "35113062"
          }
        },
        "updated_by": {
          "data": {
            "type": "Person",
            "id": "11534642"
          }
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38579002"
      }
    }
  ],
  "included": [],
  "meta": {
    "total_count": 5,
    "count": 2,
    "next": {
      "offset": 2
    },
    "can_order_by": [
      "title",
      "created_at",
      "updated_at",
      "sort_date"
    ],
    "can_query_by": [
      "title"
    ],
    "can_include": [
      "contributors",
      "my_schedules",
      "plan_times",
      "series"
    ],
    "can_filter": [
      "future",
      "past",
      "after",
      "before",
      "no_dates"
    ],
    "parent": {
      "id": "309883",
      "type": "ServiceType"
    }
  }
};

export {
  TEST_PCO_PLANS
};