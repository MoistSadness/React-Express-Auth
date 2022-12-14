/*
 *  Data provided by FGO Database
 *  https://api.atlasacademy.io/rapidoc
*/

export const nice_mystic_code = [
    {
        "id": 1,
        "name": "Mystic Code: Chaldea",
        "originalName": "Mystic Code: Chaldea",
        "detail": "Provided to the Masters of Chaldea Security Organization",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00001.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00002.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00001.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00002.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00001.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00002.png"
            }
        },
        "skills": [
            {
                "id": 980001,
                "name": "First Aid",
                "originalName": "First Aid",
                "ruby": "First Aid",
                "detail": "Greatly restore one ally's HP ",
                "unmodifiedDetail": "Greatly restore one ally's HP [{0}]",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00600.png",
                "coolDown": [
                    9,
                    9,
                    9,
                    9,
                    9,
                    8,
                    8,
                    8,
                    8,
                    7
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 443,
                        "funcType": "gainHp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1200
                            },
                            {
                                "Rate": 1000,
                                "Value": 1400
                            },
                            {
                                "Rate": 1000,
                                "Value": 1600
                            },
                            {
                                "Rate": 1000,
                                "Value": 1800
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2200
                            },
                            {
                                "Rate": 1000,
                                "Value": 2400
                            },
                            {
                                "Rate": 1000,
                                "Value": 2600
                            },
                            {
                                "Rate": 1000,
                                "Value": 3000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980002,
                "name": "Instant Enhancement",
                "originalName": "Instant Enhancement",
                "ruby": "Instant Enhancement",
                "detail": "Significantly increase one ally's ATK (1 turn)",
                "unmodifiedDetail": "Significantly increase one ally's ATK [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00300.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 150,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "ATK Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 126,
                                "name": "ATK Up",
                                "detail": "Increase ATK",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                                "type": "upAtk",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3027,
                                        "name": "buffAtkUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980003,
                "name": "Emergency Evade",
                "originalName": "Emergency Evade",
                "ruby": "Emergency Evade",
                "detail": "Apply Evade for one ally (1 turn)",
                "unmodifiedDetail": "Apply Evade for one ally (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00402.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 284,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Evade",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 151,
                                "name": "Evade",
                                "detail": "Reduce ATK damage taken to 0",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                                "type": "avoidance",
                                "buffGroup": 200,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3018,
                                        "name": "buffEvadeAndInvincible"
                                    },
                                    {
                                        "id": 3021,
                                        "name": "buffEvade"
                                    },
                                    {
                                        "id": 3007,
                                        "name": "buffIncreaseDefence"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            10000,
            40000,
            100000,
            220000,
            460000,
            940000,
            1900000,
            3820000,
            7660000
        ],
        "costumes": []
    },
    {
        "id": 20,
        "name": "Mystic Code: Chaldea Combat Uniform",
        "originalName": "Mystic Code: Chaldea Combat Uniform",
        "detail": "Created by the tech team at the Chaldea Security Organization to withstand harsh and intense battlefields.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00021.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00022.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00021.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00022.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00021.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00022.png"
            }
        },
        "skills": [
            {
                "id": 980004,
                "name": "Buff All Allies",
                "originalName": "Buff All Allies",
                "ruby": "Buff All Allies",
                "detail": "Increase all allies' ATK (1 turn)",
                "unmodifiedDetail": "Increase all allies' ATK [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00300.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 152,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "ATK Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 126,
                                "name": "ATK Up",
                                "detail": "Increase ATK",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                                "type": "upAtk",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3027,
                                        "name": "buffAtkUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980005,
                "name": "Gandr",
                "originalName": "Gandr",
                "ruby": "Gandr",
                "detail": "Inflict Stun to one enemy (1 turn)",
                "unmodifiedDetail": "Inflict Stun to one enemy (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00508.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 353,
                        "funcType": "addState",
                        "funcTargetType": "enemy",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Stun",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_501.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 178,
                                "name": "Stun",
                                "detail": "Unable to act",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_501.png",
                                "type": "donotAct",
                                "buffGroup": 500,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3005,
                                        "name": "buffNegativeEffect"
                                    },
                                    {
                                        "id": 3014,
                                        "name": "buffStun"
                                    },
                                    {
                                        "id": 3045,
                                        "name": "buffImmobilize"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980006,
                "name": "Order Change",
                "originalName": "Order Change",
                "ruby": "Order Change",
                "detail": "Switch one active member with a sub-member",
                "unmodifiedDetail": "Switch one active member with a sub-member",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00704.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 531,
                        "funcType": "replaceMember",
                        "funcTargetType": "ptselectOneSub",
                        "funcTargetTeam": "player",
                        "funcPopupText": "None",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            1569000,
            4707000,
            9414000,
            15690000,
            23535000,
            32949000,
            43932000,
            56484000,
            70605000
        ],
        "costumes": []
    },
    {
        "id": 30,
        "name": "Mystic Code: Mage's Association Uniform",
        "originalName": "Mystic Code: Mage's Association Uniform",
        "detail": "Given to outstanding students acknowledged by the Mage's Association.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00031.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00032.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00031.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00032.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00031.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00032.png"
            }
        },
        "skills": [
            {
                "id": 980007,
                "name": "Cure-All",
                "originalName": "Cure-All",
                "ruby": "Cure-All",
                "detail": "Restore all allies' HP ",
                "unmodifiedDetail": "Restore all allies' HP [{0}]",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00600.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 445,
                        "funcType": "gainHp",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 800
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1200
                            },
                            {
                                "Rate": 1000,
                                "Value": 1400
                            },
                            {
                                "Rate": 1000,
                                "Value": 1600
                            },
                            {
                                "Rate": 1000,
                                "Value": 1800
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2200
                            },
                            {
                                "Rate": 1000,
                                "Value": 2400
                            },
                            {
                                "Rate": 1000,
                                "Value": 2800
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980008,
                "name": "Spiritron Transfer",
                "originalName": "Spiritron Transfer",
                "ruby": "Spiritron Transfer",
                "detail": "Increase NP Gauge for one ally ",
                "unmodifiedDetail": "Increase NP Gauge for one ally [{0}]",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00601.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980009,
                "name": "Command Shuffle",
                "originalName": "Command Shuffle",
                "ruby": "Command Shuffle",
                "detail": "Redistribute Command Cards",
                "unmodifiedDetail": "Redistribute Command Cards",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00703.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 530,
                        "funcType": "cardReset",
                        "funcTargetType": "self",
                        "funcTargetTeam": "player",
                        "funcPopupText": "None",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            1569000,
            4707000,
            9414000,
            15690000,
            23535000,
            32949000,
            43932000,
            56484000,
            70605000
        ],
        "costumes": []
    },
    {
        "id": 40,
        "name": "Mystic Code: Atlas Institute Uniform",
        "originalName": "Mystic Code: Atlas Institute Uniform",
        "detail": "Created by the Atlas Institute to be the \"most powerful\" Mystic Code.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00041.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00042.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00041.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00042.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00041.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00042.png"
            }
        },
        "skills": [
            {
                "id": 980010,
                "name": "Dust of Osiris",
                "originalName": "Dust of Osiris",
                "ruby": "Dust of Osiris",
                "detail": "Apply Invincible to one ally (1 turn)",
                "unmodifiedDetail": "Apply Invincible to one ally (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00403.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 290,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Invincible",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_311.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 155,
                                "name": "Invincible",
                                "detail": "Ignore Sure Hit and reduce ATK damage to 0",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_311.png",
                                "type": "invincible",
                                "buffGroup": 400,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3018,
                                        "name": "buffEvadeAndInvincible"
                                    },
                                    {
                                        "id": 3022,
                                        "name": "buffInvincible"
                                    },
                                    {
                                        "id": 3007,
                                        "name": "buffIncreaseDefence"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980011,
                "name": "Rain of Isis",
                "originalName": "Rain of Isis",
                "ruby": "Rain of Isis",
                "detail": "Remove one ally's Debuffs",
                "unmodifiedDetail": "Remove one ally's Debuffs",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00608.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 435,
                        "funcType": "subState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Remove Debuff",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "traitVals": [
                            {
                                "id": 3005,
                                "name": "buffNegativeEffect"
                            }
                        ],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980012,
                "name": "Eyes of Medjed",
                "originalName": "Eyes of Medjed",
                "ruby": "Eyes of Medjed",
                "detail": "Reduce one ally's skill cooldown by 2",
                "unmodifiedDetail": "Reduce one ally's skill cooldown by 2",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00609.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 501,
                        "funcType": "shortenSkill",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "Cooldown\nReduced",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            },
                            {
                                "Rate": 1000,
                                "Value": 2
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            1569000,
            4707000,
            9414000,
            15690000,
            23535000,
            32949000,
            43932000,
            56484000,
            70605000
        ],
        "costumes": []
    },
    {
        "id": 50,
        "name": "Anniversary Blonde",
        "originalName": "Anniversary Blonde",
        "detail": "Replica of the costume once worn by the King of Knights",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00051.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00052.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00051.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00052.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00051.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00052.png"
            }
        },
        "skills": [
            {
                "id": 980013,
                "name": "Mana Burst",
                "originalName": "Mana Burst",
                "ruby": "Mana Burst",
                "detail": "Significantly increase one ally's Buster Card effectiveness (1 turn)",
                "unmodifiedDetail": "Significantly increase one ally's Buster Card effectiveness [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00306.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 123,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Buster Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_314.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 102,
                                "name": "Buster Up",
                                "detail": "Increase Buster Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_314.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4002,
                                        "name": "cardBuster"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4002,
                                        "name": "cardBuster"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 480
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 520
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 540
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 560
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 600
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980014,
                "name": "Confident in Victory",
                "originalName": "Confident in Victory",
                "ruby": "Confident in Victory",
                "detail": "Gain large amounts of C. Stars ",
                "unmodifiedDetail": "Gain large amounts of C. Stars [{0}]",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00603.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 651,
                        "funcType": "gainStar",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            },
                            {
                                "Rate": 1000,
                                "Value": 0
                            }
                        ]
                    },
                    {
                        "funcId": 673,
                        "funcType": "gainStar",
                        "funcTargetType": "self",
                        "funcTargetTeam": "player",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 10
                            },
                            {
                                "Rate": 1000,
                                "Value": 11
                            },
                            {
                                "Rate": 1000,
                                "Value": 12
                            },
                            {
                                "Rate": 1000,
                                "Value": 13
                            },
                            {
                                "Rate": 1000,
                                "Value": 14
                            },
                            {
                                "Rate": 1000,
                                "Value": 15
                            },
                            {
                                "Rate": 1000,
                                "Value": 16
                            },
                            {
                                "Rate": 1000,
                                "Value": 17
                            },
                            {
                                "Rate": 1000,
                                "Value": 18
                            },
                            {
                                "Rate": 1000,
                                "Value": 20
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980015,
                "name": "Knight's Oath",
                "originalName": "Knight's Oath",
                "ruby": "Knight's Oath",
                "detail": "Apply Guts to one ally (1 time, 1 turn)",
                "unmodifiedDetail": "Apply Guts to one ally [{0}] (1 time, 1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00404.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 293,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Guts",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_304.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 180,
                                "name": "Guts",
                                "detail": "When HP reaches 0, recover HP and survive",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_304.png",
                                "type": "guts",
                                "buffGroup": 600,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3024,
                                        "name": "buffGuts"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 2000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 2200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 2400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 2600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 2800
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 3000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 3200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 3400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 3600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": 1,
                                "Value": 4000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 60,
        "name": "Royal Brand",
        "originalName": "Royal Brand",
        "detail": "A Mystic Code once used by a beautiful knight during a certain Holy Grail War.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00061.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00062.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00061.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00062.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00061.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00062.png"
            }
        },
        "skills": [
            {
                "id": 980016,
                "name": "Reaction Reinforcement ",
                "originalName": "Reaction Reinforcement ",
                "ruby": "Reaction Reinforcement ",
                "detail": "Increase one ally's Quick Card effectiveness (1 turn)",
                "unmodifiedDetail": "Increase one ally's Quick Card effectiveness [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00304.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 105,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Quick Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 100,
                                "name": "Quick Up",
                                "detail": "Increase Quick Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980017,
                "name": "Iron Devotion",
                "originalName": "Iron Devotion",
                "ruby": "Iron Devotion",
                "detail": "Increase one ally's C. Star Gather Rate (1 turn)",
                "unmodifiedDetail": "Increase one ally's C. Star Gather Rate [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00311.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 369,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star\nGather Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 115,
                                "name": "C. Star Gather Up",
                                "detail": "Increase C. Star gather rate",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                                "type": "upStarweight",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 500000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 5000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 5500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 6000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 6500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 7000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 7500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 8000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 8500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 9000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 10000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980018,
                "name": "Inescapable",
                "originalName": "Inescapable",
                "ruby": "Inescapable",
                "detail": "Apply Sure Hit to one ally (1 turn)",
                "unmodifiedDetail": "Apply Sure Hit to one ally [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00310.png",
                "coolDown": [
                    10,
                    10,
                    10,
                    10,
                    10,
                    9,
                    9,
                    9,
                    9,
                    8
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 508,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Sure Hit",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_309.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 154,
                                "name": "Sure Hit",
                                "detail": "Ignore Evade and deal ATK damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_309.png",
                                "type": "breakAvoidance",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3019,
                                        "name": "buffSureHit"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 70,
        "name": "Brilliant Summer",
        "originalName": "Brilliant Summer",
        "detail": "Anti-Tropical Environmental Gear created by the Da Vinci Workshop.\nIn other words, a swimsuit, but also a Mystic Code with combat functions.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00071.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00072.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00071.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00072.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00071.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00072.png"
            }
        },
        "skills": [
            {
                "id": 980019,
                "name": "Rumble Party",
                "originalName": "Rumble Party",
                "ruby": "Rumble Party",
                "detail": "Increase Quick Card effectiveness for all allies (1 turn)",
                "unmodifiedDetail": "Increase Quick Card effectiveness for all allies [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00304.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 108,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Quick Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 100,
                                "name": "Quick Up",
                                "detail": "Increase Quick Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980020,
                "name": "Deadly Trident",
                "originalName": "Deadly Trident",
                "ruby": "Deadly Trident",
                "detail": "Apply Ignore Invincible for a single ally (1 turn)",
                "unmodifiedDetail": "Apply Ignore Invincible for a single ally (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00312.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 511,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Ignore\nInvincible",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_329.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 189,
                                "name": "Ignore Invincible",
                                "detail": "Ignore Evade and Invincible to deal damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_329.png",
                                "type": "pierceInvincible",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3059,
                                        "name": "buffInvinciblePierce"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980021,
                "name": "Beach House Shower",
                "originalName": "Beach House Shower",
                "ruby": "Beach House Shower",
                "detail": "Restore HP & increase NP Gauge for a single ally",
                "unmodifiedDetail": "Restore HP [{0}] & increase NP Gauge for a single ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00600.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 442,
                        "funcType": "gainHp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1200
                            },
                            {
                                "Rate": 1000,
                                "Value": 1400
                            },
                            {
                                "Rate": 1000,
                                "Value": 1600
                            },
                            {
                                "Rate": 1000,
                                "Value": 1800
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2200
                            },
                            {
                                "Rate": 1000,
                                "Value": 2400
                            },
                            {
                                "Rate": 1000,
                                "Value": 2600
                            },
                            {
                                "Rate": 1000,
                                "Value": 3000
                            }
                        ]
                    },
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 80,
        "name": "Memories of the Lunar Sea",
        "originalName": "Memories of the Lunar Sea",
        "detail": "A Mystic Code modeled after a certain school's uniform\nfrom a certain parallel world.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00081.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00082.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00081.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00082.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00081.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00082.png"
            }
        },
        "skills": [
            {
                "id": 980022,
                "name": "Spiritron Boost",
                "originalName": "Spiritron Boost",
                "ruby": "Spiritron Boost",
                "detail": "Increase an ally's Arts Card effectiveness (1 turn)",
                "unmodifiedDetail": "Increase an ally's Arts Card effectiveness [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00305.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 114,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Arts Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 101,
                                "name": "Arts Up",
                                "detail": "Increase Arts Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980023,
                "name": "Stepping Stone to Ultimate Victory",
                "originalName": "Stepping Stone to Ultimate Victory",
                "ruby": "Stepping Stone to Ultimate Victory",
                "detail": "Increase an ally's Critical Star drop rate (1 turn)",
                "unmodifiedDetail": "Increase an ally's Critical Star drop rate [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00604.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 298,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star\nDrop Rate Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_321.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 117,
                                "name": "C. Star Drop Rate Up",
                                "detail": "Increase C. Star drop rate",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_321.png",
                                "type": "upCriticalpoint",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 550
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 650
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 700
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 750
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 800
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 850
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 900
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980024,
                "name": "Punishment",
                "originalName": "Punishment",
                "ruby": "Punishment",
                "detail": "Apply Nullify Buff to a single enemy (1 time)",
                "unmodifiedDetail": "Apply Nullify Buff to a single enemy (1 time)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00521.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 778,
                        "funcType": "addState",
                        "funcTargetType": "enemy",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Nullify Buff",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_531.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 230,
                                "name": "Nullify Buff",
                                "detail": "Unremovable",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_531.png",
                                "type": "avoidState",
                                "buffGroup": 1000,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3005,
                                        "name": "buffNegativeEffect"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "ckSelfIndv": [],
                                "ckOpIndv": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 1000,
                                "Turn": -1,
                                "Count": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 90,
        "name": "Memories of the Far Side of the Moon",
        "originalName": "Memories of the Far Side of the Moon",
        "detail": "A Mystic Code patterned after the old uniform of a certain school located in a parallel world.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00091.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00092.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00091.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00092.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00091.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00092.png"
            }
        },
        "skills": [
            {
                "id": 980025,
                "name": "Spiritron Boost (All)",
                "originalName": "Spiritron Boost (All)",
                "ruby": "Spiritron Boost (All)",
                "detail": "Increase all allies' Arts Card effectiveness (1 turn)",
                "unmodifiedDetail": "Increase all allies' Arts Card effectiveness [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00305.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 117,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Arts Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 101,
                                "name": "Arts Up",
                                "detail": "Increase Arts Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980026,
                "name": "Stepping Stone To Survival",
                "originalName": "Stepping Stone To Survival",
                "ruby": "Stepping Stone To Survival",
                "detail": "Apply Debuff Immune (1 time) for one ally",
                "unmodifiedDetail": "Apply Debuff Immune (1 time) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00411.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 628,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Debuff Immune",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_322.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 171,
                                "name": "Debuff Immune",
                                "detail": "Immune to all debuffs",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_322.png",
                                "type": "avoidState",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3061,
                                        "name": "buffNegativeEffectImmunity"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 3005,
                                        "name": "buffNegativeEffect"
                                    }
                                ],
                                "ckSelfIndv": [],
                                "ckOpIndv": [
                                    {
                                        "id": 3005,
                                        "name": "buffNegativeEffect"
                                    }
                                ],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": -1,
                                "Count": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980027,
                "name": "Dial Down",
                "originalName": "Dial Down",
                "ruby": "Dial Down",
                "detail": "Decrease one enemy's Charge by 1",
                "unmodifiedDetail": "Decrease one enemy's Charge by 1",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00513.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 473,
                        "funcType": "delayNpturn",
                        "funcTargetType": "enemy",
                        "funcTargetTeam": "enemy",
                        "funcPopupText": "Charge Loss",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            },
                            {
                                "Rate": 1000,
                                "Value": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 100,
        "name": "A Fragment of 2004",
        "originalName": "A Fragment of 2004",
        "detail": "A Mystic Code patterned after the school uniform once worn by several of the Masters who battled for the Holy Grail in a certain rural city in Japan.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00101.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00102.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00101.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00102.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00101.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00102.png"
            }
        },
        "skills": [
            {
                "id": 980028,
                "name": "Code: F",
                "originalName": "Code: F",
                "ruby": "Code: F",
                "detail": "Increase NP Strength (1 turn) for one ally",
                "unmodifiedDetail": "Increase NP Strength [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00302.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 252,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980029,
                "name": "Code: U",
                "originalName": "Code: U",
                "ruby": "Code: U",
                "detail": "Increase Buster Card C. Star Gather Rate (1 turn) for one ally",
                "unmodifiedDetail": "Increase Buster Card C. Star Gather Rate [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00308.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 1855,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star Gather Up: Buster",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 720,
                                "name": "C. Star Gather Up: Buster",
                                "detail": "Increase C. Star Gather Rate for Buster Cards",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                                "type": "upStarweight",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [
                                    {
                                        "id": 4002,
                                        "name": "cardBuster"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 500000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 50000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 55000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 60000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 65000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 70000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 75000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 80000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 85000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 90000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 100000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980030,
                "name": "Code: H",
                "originalName": "Code: H",
                "ruby": "Code: H",
                "detail": "Increase NP Gain (1 turn) for one ally",
                "unmodifiedDetail": "Increase NP Gain [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00602.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 684,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_303.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 140,
                                "name": "NP Gain Up",
                                "detail": "Increase NP amount gained",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_303.png",
                                "type": "upDropnp",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 110,
        "name": "Mystic Code: Chaldea Uniform - Arctic",
        "originalName": "Mystic Code: Chaldea Uniform - Arctic",
        "detail": "A Mystic Code created in anticipation of the wearer encountering extreme cold.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00111.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00112.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00111.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00112.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00111.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00112.png"
            }
        },
        "skills": [
            {
                "id": 980031,
                "name": "Purifying Recovery",
                "originalName": "Purifying Recovery",
                "ruby": "Purifying Recovery",
                "detail": "Restore HP & remove DEF Debuffs for one ally",
                "unmodifiedDetail": "Restore HP [{0}] & remove DEF Debuffs for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00600.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 442,
                        "funcType": "gainHp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1200
                            },
                            {
                                "Rate": 1000,
                                "Value": 1400
                            },
                            {
                                "Rate": 1000,
                                "Value": 1600
                            },
                            {
                                "Rate": 1000,
                                "Value": 1800
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2200
                            },
                            {
                                "Rate": 1000,
                                "Value": 2400
                            },
                            {
                                "Rate": 1000,
                                "Value": 2600
                            },
                            {
                                "Rate": 1000,
                                "Value": 3000
                            }
                        ]
                    },
                    {
                        "funcId": 2222,
                        "funcType": "subState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Remove DEF Debuff",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "traitVals": [
                            {
                                "id": 3009,
                                "name": "buffDecreaseDefence"
                            }
                        ],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980032,
                "name": "Illusionary Buff",
                "originalName": "Illusionary Buff",
                "ruby": "Illusionary Buff",
                "detail": "Increase ATK (1 turn) & increase NP Strength (1 turn) for one ally",
                "unmodifiedDetail": "Increase ATK [{0}] (1 turn) & increase NP Strength [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00300.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 150,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "ATK Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 126,
                                "name": "ATK Up",
                                "detail": "Increase ATK",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_300.png",
                                "type": "upAtk",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3027,
                                        "name": "buffAtkUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            }
                        ]
                    },
                    {
                        "funcId": 252,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 100
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 110
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 120
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 130
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 140
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 150
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 160
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 170
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 180
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980033,
                "name": "Predictive Evasion",
                "originalName": "Predictive Evasion",
                "ruby": "Predictive Evasion",
                "detail": "Apply Evade to one ally (1 time, 3 turns)",
                "unmodifiedDetail": "Apply Evade to one ally (1 time, 3 turns)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00402.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 284,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Evade",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 151,
                                "name": "Evade",
                                "detail": "Reduce ATK damage taken to 0",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                                "type": "avoidance",
                                "buffGroup": 200,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3018,
                                        "name": "buffEvadeAndInvincible"
                                    },
                                    {
                                        "id": 3021,
                                        "name": "buffEvade"
                                    },
                                    {
                                        "id": 3007,
                                        "name": "buffIncreaseDefence"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            3451800,
            10355400,
            20710800,
            34518000,
            51777000,
            72487800,
            96650400,
            124264800,
            155331000
        ],
        "costumes": []
    },
    {
        "id": 120,
        "name": "Tropical Summer",
        "originalName": "Tropical Summer",
        "detail": "Anti-Tropical Weather Environmental Gear created in Da Vinci's Workshop.\n...It's a Hawaiian shirt, but also a Mystic Code with combat functions.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00121.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00122.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00121.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00122.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00121.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00122.png"
            }
        },
        "skills": [
            {
                "id": 980037,
                "name": "Blue Splash",
                "originalName": "Blue Splash",
                "ruby": "Blue Splash",
                "detail": "Increase Arts Card effectiveness (1 turn) & NP Strength (1 turn) for a single ally",
                "unmodifiedDetail": "Increase Arts Card effectiveness [{0}] (1 turn) & NP Strength [{0}] (1 turn) for a single ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00305.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 114,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Arts Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 101,
                                "name": "Arts Up",
                                "detail": "Increase Arts Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_313.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    },
                    {
                        "funcId": 252,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 100
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 110
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 120
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 130
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 140
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 150
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 160
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 170
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 180
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980038,
                "name": "Surprise Water",
                "originalName": "Surprise Water",
                "ruby": "Surprise Water",
                "detail": "Increase a single ally's Arts Card's C. Star Gather Rate (1 turn)",
                "unmodifiedDetail": "Increase a single ally's Arts Card's C. Star Gather Rate [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00309.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 1863,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star Gather Up: Arts",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 722,
                                "name": "C. Star Gather Up: Arts",
                                "detail": "Increase the C. Star Gather Rate for Arts Cards",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_325.png",
                                "type": "upStarweight",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [
                                    {
                                        "id": 4001,
                                        "name": "cardArts"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 500000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 50000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 55000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 60000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 65000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 70000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 75000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 80000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 85000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 90000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 100000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980039,
                "name": "Safety Oil",
                "originalName": "Safety Oil",
                "ruby": "Safety Oil",
                "detail": "Increase Buff Removal Resist (1 turn) & NP Gauge for a single ally ",
                "unmodifiedDetail": "Increase Buff Removal Resist [{0}] (1 turn) & NP Gauge for a single ally ",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00416.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 2565,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Buff Removal Resist Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_348.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 887,
                                "name": "Buff Removal Resist Up",
                                "detail": "Increase Buff Removal Resist",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_348.png",
                                "type": "upToleranceSubstate",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3007,
                                        "name": "buffIncreaseDefence"
                                    },
                                    {
                                        "id": 3027,
                                        "name": "buffAtkUp"
                                    },
                                    {
                                        "id": 3058,
                                        "name": "buffDefUp"
                                    },
                                    {
                                        "id": 3031,
                                        "name": "buffCritDamageUp"
                                    },
                                    {
                                        "id": 3021,
                                        "name": "buffEvade"
                                    },
                                    {
                                        "id": 3018,
                                        "name": "buffEvadeAndInvincible"
                                    },
                                    {
                                        "id": 3024,
                                        "name": "buffGuts"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    },
                                    {
                                        "id": 3032,
                                        "name": "buffCritRateUp"
                                    },
                                    {
                                        "id": 3019,
                                        "name": "buffSureHit"
                                    }
                                ],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 550
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 650
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 700
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 750
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 800
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 850
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 900
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1000
                            }
                        ]
                    },
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 130,
        "name": "Splendid New Year",
        "originalName": "Splendid New Year",
        "detail": "A special outfit made to represent Japanese culture.\nIt's the first fashion design collaboration between Da Vinci and Sion. ",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00131.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00132.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00131.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00132.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00131.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00132.png"
            }
        },
        "skills": [
            {
                "id": 980040,
                "name": "First Shine",
                "originalName": "First Shine",
                "ruby": "First Shine",
                "detail": "Increase all allies' NP Strength (1 turn)",
                "unmodifiedDetail": "Increase all allies' NP Strength [{0}] (1 turn)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00302.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 255,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 290
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 310
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 330
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 350
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980041,
                "name": "Little Gift",
                "originalName": "Little Gift",
                "ruby": "Little Gift",
                "detail": "Increase NP Gauge + gain C. Stars for one ally",
                "unmodifiedDetail": "Increase NP Gauge + gain C. Stars [{0}] for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00601.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Value": 1000
                            }
                        ]
                    },
                    {
                        "funcId": 651,
                        "funcType": "gainStar",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "player",
                        "funcPopupText": "C. Star Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            },
                            {
                                "Rate": 5000,
                                "Value": 0
                            }
                        ]
                    },
                    {
                        "funcId": 673,
                        "funcType": "gainStar",
                        "funcTargetType": "self",
                        "funcTargetTeam": "player",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Value": 5
                            },
                            {
                                "Rate": 5000,
                                "Value": 6
                            },
                            {
                                "Rate": 5000,
                                "Value": 7
                            },
                            {
                                "Rate": 5000,
                                "Value": 8
                            },
                            {
                                "Rate": 5000,
                                "Value": 9
                            },
                            {
                                "Rate": 5000,
                                "Value": 10
                            },
                            {
                                "Rate": 5000,
                                "Value": 11
                            },
                            {
                                "Rate": 5000,
                                "Value": 12
                            },
                            {
                                "Rate": 5000,
                                "Value": 13
                            },
                            {
                                "Rate": 5000,
                                "Value": 15
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980042,
                "name": "Osechi Package",
                "originalName": "Osechi Package",
                "ruby": "Osechi Package",
                "detail": "Increase Max HP (1 turn) for one ally",
                "unmodifiedDetail": "Increase Max HP [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00412.png",
                "coolDown": [
                    10,
                    10,
                    10,
                    10,
                    10,
                    9,
                    9,
                    9,
                    9,
                    8
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 591,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Max HP Plus",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_330.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 201,
                                "name": "Max HP Plus",
                                "detail": "Increase Max HP",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_330.png",
                                "type": "addMaxhp",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3043,
                                        "name": "buffMaxHpUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 50000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 1800
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 2000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 2200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 2400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 2600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 3000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 150,
        "name": "Captain Chaldea",
        "originalName": "Captain Chaldea",
        "detail": "A space suit considered unremarkable in the Servant Universe. \nThough it still befits the station of a true space captain!",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00151.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00152.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00151.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00152.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00151.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00152.png"
            }
        },
        "skills": [
            {
                "id": 980061,
                "name": "Overcharger",
                "originalName": "Overcharger",
                "ruby": "Overcharger",
                "detail": "Increase NP Strength (1 turn) & remove ATK Debuff for one ally",
                "unmodifiedDetail": "Increase NP Strength [{0}] (1 turn) & remove ATK Debuff for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00302.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 252,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    },
                    {
                        "funcId": 4775,
                        "funcType": "subState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Remove ATK Debuff",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "traitVals": [
                            {
                                "id": 3008,
                                "name": "buffDecreaseDamage"
                            }
                        ],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980062,
                "name": "Star Blaster",
                "originalName": "Star Blaster",
                "ruby": "Star Blaster",
                "detail": "Increase Critical Strength (1 turn) for one ally",
                "unmodifiedDetail": "Increase Critical Strength [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00303.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 203,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Critical Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_324.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 142,
                                "name": "Critical Up",
                                "detail": "Increase Critical Hit damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_324.png",
                                "type": "upCriticaldamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3031,
                                        "name": "buffCritDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 380
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 420
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 440
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 460
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 500
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980063,
                "name": "Escape Pod",
                "originalName": "Escape Pod",
                "ruby": "Escape Pod",
                "detail": "Apply Evade (1 time, 3 turns) & restore HP for one ally",
                "unmodifiedDetail": "Apply Evade (1 time, 3 turns) & restore HP [{0}] for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00402.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 284,
                        "funcType": "addState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Evade",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 151,
                                "name": "Evade",
                                "detail": "Reduce ATK damage taken to 0",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_305.png",
                                "type": "avoidance",
                                "buffGroup": 200,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3018,
                                        "name": "buffEvadeAndInvincible"
                                    },
                                    {
                                        "id": 3021,
                                        "name": "buffEvade"
                                    },
                                    {
                                        "id": 3007,
                                        "name": "buffIncreaseDefence"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": 1
                            }
                        ]
                    },
                    {
                        "funcId": 442,
                        "funcType": "gainHp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1200
                            },
                            {
                                "Rate": 1000,
                                "Value": 1400
                            },
                            {
                                "Rate": 1000,
                                "Value": 1600
                            },
                            {
                                "Rate": 1000,
                                "Value": 1800
                            },
                            {
                                "Rate": 1000,
                                "Value": 2000
                            },
                            {
                                "Rate": 1000,
                                "Value": 2200
                            },
                            {
                                "Rate": 1000,
                                "Value": 2400
                            },
                            {
                                "Rate": 1000,
                                "Value": 2600
                            },
                            {
                                "Rate": 1000,
                                "Value": 3000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 160,
        "name": "Chaldea Uniform - True Ether",
        "originalName": "Chaldea Uniform - True Ether",
        "detail": "A Mystic Code created in anticipation of the wearer being in an environment full of True Ether in the Age of Gods.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00161.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00162.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00161.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00162.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00161.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00162.png"
            }
        },
        "skills": [
            {
                "id": 980064,
                "name": "All-out Charge",
                "originalName": "All-out Charge",
                "ruby": "All-out Charge",
                "detail": "Increase Buster Card effectiveness (1 turn) for all allies",
                "unmodifiedDetail": "Increase Buster Card effectiveness [{0}] (1 turn) for all allies",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00306.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 126,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Buster Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_314.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 102,
                                "name": "Buster Up",
                                "detail": "Increase Buster Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_314.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4002,
                                        "name": "cardBuster"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4002,
                                        "name": "cardBuster"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 290
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 310
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 330
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 350
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980065,
                "name": "Triple Restoration",
                "originalName": "Triple Restoration",
                "ruby": "Triple Restoration",
                "detail": "Restore HP each turn for one ally (3 turns)",
                "unmodifiedDetail": "Restore HP each turn for one ally [{0}] (3 turns)",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00606.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 3682,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "HP Recovery\nPer Turn",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_318.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 122,
                                "name": "HP Recovery Per Turn",
                                "detail": "Recover HP at end of each turn",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_318.png",
                                "type": "regainHp",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3060,
                                        "name": "buffHpRecoveryPerTurn"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 0
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1000
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1100
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1400
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1500
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1600
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1700
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 1800
                            },
                            {
                                "Rate": 5000,
                                "Turn": 3,
                                "Count": -1,
                                "Value": 2000
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980066,
                "name": "Mana Conversion",
                "originalName": "Mana Conversion",
                "ruby": "Mana Conversion",
                "detail": "Increase NP Gauge & NP Gain (1 turn) for one ally",
                "unmodifiedDetail": "Increase NP Gauge & NP Gain [{0}] (1 turn) for one ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00601.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            }
                        ]
                    },
                    {
                        "funcId": 684,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_303.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 140,
                                "name": "NP Gain Up",
                                "detail": "Increase NP amount gained",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_303.png",
                                "type": "upDropnp",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 320
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 340
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 360
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 400
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    },
    {
        "id": 170,
        "name": "Chaldea Pathfinder",
        "originalName": "Chaldea Pathfinder",
        "detail": "A scout's uniform made for playing???err, for adventure in the mountains and forests.",
        "maxLv": 10,
        "extraAssets": {
            "item": {
                "male": "https://static.atlasacademy.io/NA/Items/masterequip00171.png",
                "female": "https://static.atlasacademy.io/NA/Items/masterequip00172.png"
            },
            "masterFace": {
                "male": "https://static.atlasacademy.io/NA/MasterFace/equip00171.png",
                "female": "https://static.atlasacademy.io/NA/MasterFace/equip00172.png"
            },
            "masterFigure": {
                "male": "https://static.atlasacademy.io/NA/MasterFigure/equip00171.png",
                "female": "https://static.atlasacademy.io/NA/MasterFigure/equip00172.png"
            }
        },
        "skills": [
            {
                "id": 980067,
                "name": "Orienting",
                "originalName": "Orienting",
                "ruby": "Orienting",
                "detail": "Increase Quick Card effectiveness (1 turn) & increase NP Strength (1 turn) for a single ally",
                "unmodifiedDetail": "Increase Quick Card effectiveness [{0}] (1 turn) & increase NP Strength [{0}] (1 turn) for a single ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00304.png",
                "coolDown": [
                    15,
                    15,
                    15,
                    15,
                    15,
                    14,
                    14,
                    14,
                    14,
                    13
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 105,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Quick Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 100,
                                "name": "Quick Up",
                                "detail": "Increase Quick Card effectiveness",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_312.png",
                                "type": "upCommandall",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    }
                                ],
                                "tvals": [
                                    {
                                        "id": 5000,
                                        "name": "canBeInBattle"
                                    },
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckSelfIndv": [
                                    {
                                        "id": 4003,
                                        "name": "cardQuick"
                                    }
                                ],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    },
                    {
                        "funcId": 252,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "NP Strength Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 138,
                                "name": "NP Strength Up",
                                "detail": "Increase NP damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_310.png",
                                "type": "upNpdamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3030,
                                        "name": "buffNpDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 100
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 110
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 120
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 130
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 140
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 150
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 160
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 170
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 180
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980068,
                "name": "Campfire",
                "originalName": "Campfire",
                "ruby": "Campfire",
                "detail": "Increase Critical Strength (1 turn) for all allies",
                "unmodifiedDetail": "Increase Critical Strength [{0}] (1 turn) for all allies",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00303.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 206,
                        "funcType": "addStateShort",
                        "funcTargetType": "ptAll",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Critical Up",
                        "funcPopupIcon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_324.png",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [
                            {
                                "id": 142,
                                "name": "Critical Up",
                                "detail": "Increase Critical Hit damage",
                                "icon": "https://static.atlasacademy.io/NA/BuffIcons/bufficon_324.png",
                                "type": "upCriticaldamage",
                                "buffGroup": 0,
                                "script": {},
                                "vals": [
                                    {
                                        "id": 3004,
                                        "name": "buffPositiveEffect"
                                    },
                                    {
                                        "id": 3006,
                                        "name": "buffIncreaseDamage"
                                    },
                                    {
                                        "id": 3031,
                                        "name": "buffCritDamageUp"
                                    }
                                ],
                                "tvals": [],
                                "ckSelfIndv": [],
                                "ckOpIndv": [],
                                "maxRate": 5000
                            }
                        ],
                        "svals": [
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 200
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 210
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 220
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 230
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 240
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 250
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 260
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 270
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 280
                            },
                            {
                                "Rate": 5000,
                                "Turn": 1,
                                "Count": -1,
                                "Value": 300
                            }
                        ]
                    }
                ]
            },
            {
                "id": 980069,
                "name": "Survival Kit",
                "originalName": "Survival Kit",
                "ruby": "Survival Kit",
                "detail": "Remove Poison, Curse, Burn & increase NP Gauge for a single ally",
                "unmodifiedDetail": "Remove Poison, Curse, Burn & increase NP Gauge for a single ally",
                "type": "active",
                "icon": "https://static.atlasacademy.io/NA/SkillIcons/skill_00608.png",
                "coolDown": [
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    10
                ],
                "actIndividuality": [],
                "script": {},
                "extraPassive": [],
                "skillAdd": [],
                "functions": [
                    {
                        "funcId": 5661,
                        "funcType": "subState",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "playerAndEnemy",
                        "funcPopupText": "Remove Poison, Curse, Burn",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "traitVals": [
                            {
                                "id": 3011,
                                "name": "buffPoison"
                            },
                            {
                                "id": 3026,
                                "name": "buffCurse"
                            },
                            {
                                "id": 3015,
                                "name": "buffBurn"
                            }
                        ],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            },
                            {
                                "Rate": 5000
                            }
                        ]
                    },
                    {
                        "funcId": 463,
                        "funcType": "gainNp",
                        "funcTargetType": "ptOne",
                        "funcTargetTeam": "player",
                        "funcPopupText": "NP Gain",
                        "functvals": [],
                        "funcquestTvals": [],
                        "funcGroup": [],
                        "buffs": [],
                        "svals": [
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            },
                            {
                                "Rate": 1000,
                                "Value": 1000
                            }
                        ]
                    }
                ]
            }
        ],
        "expRequired": [
            53000,
            132500,
            305000,
            609000,
            1218000,
            2200000,
            3727000,
            5963000,
            8950000
        ],
        "costumes": []
    }
]