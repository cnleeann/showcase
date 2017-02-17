import json
import csv

# http://stats.nba.com/stats/shotchartdetail?Period=0&VsConference=&LeagueID=00&LastNGames=0&TeamID=0&Position=&Location=&Outcome=&ContextMeasure=FGA&DateFrom=&StartPeriod=&DateTo=&OpponentTeamID=0&ContextFilter=&RangeType=&Season=2015-16&AheadBehind=&PlayerID=201939&EndRange=&VsDivision=&PointDiff=&RookieYear=&GameSegment=&Month=0&ClutchTime=Last%205%20Minutes&StartRange=&EndPeriod=&SeasonType=Regular+Season&SeasonSegment=&GameID=

#201939
with open ('json/curry.json') as curry:
	curryData = json.load(curry)

#2544
with open ('json/lebron.json') as lebron:
	lebronData = json.load(lebron)

#201142
with open ('json/durant.json') as durant:
	durantData = json.load(durant)

#201566
with open ('json/westbrook.json') as westbrook:
	westbrookData = json.load(westbrook)

#203076
with open ('json/davis.json') as davis:
	davisData = json.load(davis)

with open('data.csv', 'w') as csvFile:
	csvWriter = csv.writer(csvFile)

	# rowSet = curryData["resultSets"][0]["rowSet"]
	curryFiltered = []
	for row in curryData["resultSets"][0]["rowSet"]:
		curryFiltered.append(row)

	lebronFiltered = []
	for row in lebronData["resultSets"][0]["rowSet"]:
		lebronFiltered.append(row)

	durantFiltered = []
	for row in durantData["resultSets"][0]["rowSet"]:
		durantFiltered.append(row)

	westbrookFiltered = []
	for row in westbrookData["resultSets"][0]["rowSet"]:
		westbrookFiltered.append(row)

	davisFiltered = []
	for row in davisData["resultSets"][0]["rowSet"]:
		davisFiltered.append(row)

	csvWriter.writerow(curryData["resultSets"][0]["headers"])	
	csvWriter.writerows(curryFiltered)
	csvWriter.writerows(lebronFiltered)
	csvWriter.writerows(durantFiltered)
	csvWriter.writerows(westbrookFiltered)
	csvWriter.writerows(davisFiltered)

