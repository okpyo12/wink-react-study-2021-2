import locale
import platform
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
# get_ipython().run_line_magic('matplotlib', 'inline')

locale.setlocale(locale.LC_ALL, 'ko_KR.UTF-8')

if platform.system() == 'Darwin':  # 맥
    plt.rc('font', family='AppleGothic')
elif platform.system() == 'Windows':  # 윈도우
    plt.rc('font', family='Malgun Gothic')
elif platform.system() == 'Linux':  # 리눅스 (구글 콜랩)
    #!wget "https://www.wfonts.com/download/data/2016/06/13/malgun-gothic/malgun.ttf"
    #!mv malgun.ttf /usr/share/fonts/truetype/
    #import matplotlib.font_manager as fm
    # fm._rebuild()
    plt.rc('font', family='Malgun Gothic')
plt.rcParams['axes.unicode_minus'] = False  # 한글 폰트 사용시 마이너스 폰트 깨짐 해결
# matplotlib 패키지 한글 깨짐 처리 끝

userList = []
cnt = 0

df = pd.read_csv("./uploadedFiles/sample.csv")
df.head()

df["Date"] = df["Date"].astype("datetime64")

df["year"] = df["Date"].dt.year
df["month"] = df["Date"].dt.month
df["day"] = df["Date"].dt.day
df["hour"] = df["Date"].dt.hour
df['weekday'] = df["Date"].dt.strftime("%A")

# df=df[~df["Message"].str.contains("invited")]
# df=df[~df["Message"].str.contains("나갔습니다.")]

df.isnull().sum()
df["User"] = df["User"].fillna("(알 수 없음)")


# # --------분석-


<<<<<<< HEAD
# #연도별 메시지 개수
# df.groupby("year")["Message"].count().plot(kind="pie",
#                                           title="연도별 메시지 수",
#                                           autopct='%.2f%%')  #그래프
=======
#연도별 메시지 개수
df.groupby("year")["Message"].count().plot(kind="pie",
                                          title="연도별 메시지 수",
                                          autopct='%.2f%%')  #그래프
>>>>>>> e4de72402a38b65c26348d5ab70d0eaccbaac738
print("<연도별 메시지 개수><br />")
print(df.groupby("year")["Message"].count().to_string() + "<br />")  # 텍스트
print("-------------------------------------------<br /><br />")


# #월별 메시지 개수
# df[df["year"]==2021].groupby("month")["Message"].count().plot(kind="pie",
#                                                               title="2021년 월별 메시지 수",
#                                                               autopct='%.1f%%')  #그래프
print("<월별 메시지 개수><br />")
print(df.groupby("month")["Message"].count().to_string() + "<br />")
print("-------------------------------------------<br /><br />")


# 요일별 메시지 개수
# df.groupby("weekday")["Message"].count().sort_values(ascending=False).plot(kind="pie",
#                                                                         grid=True,
#                                                                         title="요일별 메시지 수",
#                                                                         autopct='%.1f%%');
print("<요일별 메시지 개수><br />")
print(df.groupby("weekday")["Message"].count().sort_values(ascending=False).to_string() + "<br />")
print("-------------------------------------------<br /><br />")


# 시간별 메시지 개수
# df.groupby("hour")["Message"].count().plot(kind="pie",
#                                             grid=True,
#                                             title="시간별 메시지 수",
#                                             autopct='%.1f%%');
print("<시간별 메시지 개수><br />")
print(df.groupby("hour")["Message"].count().to_string() + "<br />")
print("-------------------------------------------<br /><br />")


# #보낸 사람별 메시지 개수
# df.groupby("User")["Message"].count().sort_values(ascending=True)[-11:].plot(kind="pie",
#                                                                              grid=True,
#                                                                              title="사람별 보낸 메시지 수",
#                                                                              autopct='%.2f%%')
print("<사람별 보낸 메시지 개수><br />")
print(df.groupby("User")["Message"].count().sort_values(ascending=False).to_string() + "<br />")
print("-------------------------------------------<br /><br />")


# #이모티콘 사용 순위
# df[df["Message"]=="이모티콘"].groupby("User")["Message"].count().sort_values(ascending=True)[-11:].plot(kind="barh",
#                                                                                                     grid=True,
#                                                                                                     title="사람별 보낸 이모티콘 수",
#                                                                                                     );
print("<사람별 보낸 이모티콘 개수><br />")
print(df[df["Message"] == "이모티콘"].groupby("User")[
      "Message"].count().sort_values(ascending=False)[:10].to_string() + "<br />")
print("-------------------------------------------<br /><br />")


# 사진 보내기 순위
# df[df["Message"]=="사진"].groupby("User")["Message"].count().sort_values(ascending=True)[-11:].plot(kind="barh",
#                                                                                                   grid=True,
#                                                                                                   title="사람별 보낸 사진 수");
print("<사람별 보낸 사진 개수><br />")
print(df[df["Message"] == "사진"].groupby("User")[
      "Message"].count().sort_values(ascending=False)[:10].to_string() + "<br />")
print("-------------------------------------------")


# ㅋ 순위
# df[df["Message"].str.contains("ㅋ", na=False)].groupby("User")["Message"].count().sort_values(ascending=True)[-11:].plot(kind="barh",
#                                                                                                                 grid=True,
#                                                                                                                 title="사람별 'ㅋ'이 포함된 채팅 개수"
#                                                                                                                 );
# df[df["Message"].str.contains("ㅋ", na=False)].groupby("User")["Message"].count().sort_values(ascending=False)[:10]


# ㅠ 이 포함된 채팅 개수
# df[df["Message"].str.contains("ㅠ",na=False)].groupby("User")["Message"].count().sort_values(ascending=True)[-11:].plot(kind="barh",
#                                                                                                                        grid=True,
#                                                                                                                        title="사람별 보낸 ㅠ 개수");
# df[df["Message"].str.contains("ㅠ",na=False)].groupby("User")["Message"].count().sort_values(ascending=False)[:10]
