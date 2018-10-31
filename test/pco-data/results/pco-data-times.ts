const TEST_PCO_TIME1 = {
  "links": {
    "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38402157/plan_times?where[time_type]=service"
  },
  "data": [{
      "type": "PlanTime",
      "id": "92596418",
      "attributes": {
        "created_at": "2018-09-22T11:17:21Z",
        "ends_at": "2018-10-28T18:30:00Z",
        "live_ends_at": null,
        "live_starts_at": null,
        "name": "1st Service",
        "starts_at": "2018-10-28T17:00:00Z",
        "team_reminders": [{
            "team_id": "2995816",
            "value": 6
          },
          {
            "team_id": "2995868",
            "value": 6
          },
          {
            "team_id": "2995871",
            "value": 4
          },
          {
            "team_id": "2995907",
            "value": 4
          },
          {
            "team_id": "2995921",
            "value": 4
          },
          {
            "team_id": "2872793",
            "value": 4
          }
        ],
        "time_type": "service",
        "updated_at": "2018-10-16T16:35:46Z"
      },
      "relationships": {
        "assigned_teams": {
          "data": [{
            "type": "Team",
            "id": "2872793"
          }]
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38402157/plan_times/92596418"
      }
    },
    {
      "type": "PlanTime",
      "id": "92596476",
      "attributes": {
        "created_at": "2018-09-22T11:53:07Z",
        "ends_at": "2018-10-28T20:30:00Z",
        "live_ends_at": null,
        "live_starts_at": null,
        "name": "2nd Service",
        "starts_at": "2018-10-28T19:00:00Z",
        "team_reminders": [{
            "team_id": "2995816",
            "value": 6
          },
          {
            "team_id": "2995868",
            "value": 6
          },
          {
            "team_id": "2995871",
            "value": 4
          },
          {
            "team_id": "2995907",
            "value": 4
          },
          {
            "team_id": "2995921",
            "value": 4
          },
          {
            "team_id": "2872793",
            "value": 4
          }
        ],
        "time_type": "service",
        "updated_at": "2018-10-16T16:36:18Z"
      },
      "relationships": {
        "assigned_teams": {
          "data": []
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38402157/plan_times/92596476"
      }
    }
  ],
  "included": [],
  "meta": {
    "total_count": 2,
    "count": 2,
    "can_query_by": [
      "time_type"
    ],
    "can_include": [
      "split_team_rehearsal_assignments"
    ],
    "parent": {
      "id": "38402157",
      "type": "Plan"
    }
  }
};

const TEST_PCO_TIME2 = {
  "links": {
    "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38579002/plan_times?where[time_type]=service"
  },
  "data": [{
      "type": "PlanTime",
      "id": "93006671",
      "attributes": {
        "created_at": "2018-10-02T20:53:32Z",
        "ends_at": "2018-11-04T19:30:00Z",
        "live_ends_at": null,
        "live_starts_at": null,
        "name": "1st Service",
        "starts_at": "2018-11-04T18:00:00Z",
        "team_reminders": [{
            "team_id": "2995816",
            "value": 6
          },
          {
            "team_id": "2995868",
            "value": 6
          },
          {
            "team_id": "2995871",
            "value": 4
          },
          {
            "team_id": "2995907",
            "value": 4
          },
          {
            "team_id": "2995921",
            "value": 4
          },
          {
            "team_id": "2872793",
            "value": 4
          }
        ],
        "time_type": "service",
        "updated_at": "2018-10-16T16:35:46Z"
      },
      "relationships": {
        "assigned_teams": {
          "data": [{
            "type": "Team",
            "id": "2872793"
          }]
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38579002/plan_times/93006671"
      }
    },
    {
      "type": "PlanTime",
      "id": "93006673",
      "attributes": {
        "created_at": "2018-10-02T20:53:33Z",
        "ends_at": "2018-11-04T21:30:00Z",
        "live_ends_at": null,
        "live_starts_at": null,
        "name": "2nd Service",
        "starts_at": "2018-11-04T20:00:00Z",
        "team_reminders": [{
            "team_id": "2995816",
            "value": 6
          },
          {
            "team_id": "2995868",
            "value": 6
          },
          {
            "team_id": "2995871",
            "value": 4
          },
          {
            "team_id": "2995907",
            "value": 4
          },
          {
            "team_id": "2995921",
            "value": 4
          },
          {
            "team_id": "2872793",
            "value": 4
          }
        ],
        "time_type": "service",
        "updated_at": "2018-10-16T16:36:19Z"
      },
      "relationships": {
        "assigned_teams": {
          "data": []
        }
      },
      "links": {
        "self": "https://api.planningcenteronline.com/services/v2/service_types/309883/plans/38579002/plan_times/93006673"
      }
    }
  ],
  "included": [],
  "meta": {
    "total_count": 2,
    "count": 2,
    "can_query_by": [
      "time_type"
    ],
    "can_include": [
      "split_team_rehearsal_assignments"
    ],
    "parent": {
      "id": "38579002",
      "type": "Plan"
    }
  }
};

export {
  TEST_PCO_TIME1,
  TEST_PCO_TIME2
};