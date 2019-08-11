import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Header, Button } from "../common";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import Input from "../common/Input";
import { Icon } from "native-base";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
class FreelanceProfile extends Component {
  render() {
    return (
      <View>
        <Header
          HeaderText="My Freelance"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView>
          <View
            style={{
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,

              backgroundColor: "#f3f3f3",
              width: widthPercentageToDP("90%"),
              height: heightPercentageToDP("24"),
              alignSelf: "center"
            }}
          >
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              Pitcure
            </Text>
            <ImageBackground
              source={{
                uri:
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERITEhISFRUXFRUXFRUVEA8VExUQFRUWFhUVFRUYHSggGBolGxcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHyUtKy0tKy0tLSsrLS0tLSstLS0tLS0tKy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0vLf/AABEIALoBEAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADoQAAIBAgMFBgQEBQQDAAAAAAABAgMRBBIhBRMxQXFRYYGRobEiMsHRBlLh8BVCYnKiFBZjkjNDgv/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAkEQEAAgIDAAICAgMAAAAAAAAAAQIREgMhMQRRIkEyYRMUcf/aAAwDAQACEQMRAD8A9yAAeE+gAAAAALq1ox+Zpe/kTT2lHkm/JG4ks2iPVoGf/E/6P8v0GU9owfG68Lr0DWWb1+1gHMJpq6aa7jow4AAAAAAAAAXKsl+hk2iPQYAj/U93qCxK7BP81PsHgcRqp8zseJifAAADQAAAAADipVjHWTSAOwIp7SiuCb9EL/in9H+X6GbQpHFf6aIEUNpRfFNeqK6dRSV00zcwWaWj2HQAAFAAAAAAAAQYzHW0h4v7HW0cRlWVcXx7kZY9YR5L46h9bvqxOJxEaavJ9Fzb7hp57a2JVSayu6St1d9WvTyGmcJ0rtK6O2o31jJLtun6GjCakk07p8GeTNPZOLy/C+392FrY9+OIjMN6lUcXdOxq4TFqej0l2dvQxk78DqMmndcRpjJK3mr0ACcLWzxvz59RxJ0xOQczkkrs6I6s7v2JcvJpH9tFSq307BNSooq8mkrpXfa3ZHZ5n8S4zNNU1wjq++TSt5J+pyUieS3bWg9v0ry42XBpNuT7lyXV8xlDbdGbSu03+ZWS6vhw1PIgdP8Ar0GX6ANp1muOqPPfhzHNxdOT+X5X/T2eH1Nw5Zzx2xAXJ3PpJQqWduTKzt4+TeMsAAS4/EZI6cXw7lzZSW1iZnEOMZjcvwx1fN8l+plzk27t3Z8AlM5d1KRWOgBl47auVuMLNri3wv3dpD/Eqv5/8Y/Y2KyS3NWJw9EdQm4u6dmYNDa80/jtJdEmuhtU5qSTTunwMmJg9b1v42MHjc+ktJej/UsPOmzgcRnjrxXH6Metsufl48dwpAAGQAAKxUrQl0YCWNXqZpN9r9ORwAFnGh2zVcaen8zS8NW/b1PPnodsU70n3NP6W9TzxO3ro4v4gEwAVRvYTEWSfJpNl6d+BmU42SXYkOo1svQs4c9tnZtS07cn7rVfU1jAw8/ii12r3N8nZ08U9FYmVl1JR2Keq6CTzuec3lYHidqSvWq/3yXk7fQ9seExlTNUnK1rybt1ZT43siSgADrY0NhStWXepL0v9D1NOpbRnktj1MtaHfp5nqTz/ldXz/TYVllGV0jMp1LaMvwr4jfGt+WBJ5iY2rmm3yWi6I2puyb7Ezzx13X+PHcyCTalfJTduL0Xjx9LlZk7elpBf3P2+4tfVuScVmWQAAVcINTY+JsnF8L+/YZZVs5/E+n1QtvFuCfzh6NO5RgauWa7Ho/H9bGTQrZehcpc0TiXZenWHogPiZ9LPNArFq8JdGNPjVwZPjz4HVSGVtPk7HJZxotsf+J9V7nnj1rVzy+Kw7pycX4PtXJiWhfinrBQAU4GleV+S9+QsRlW04jLQpfLHovY6ACrhUYKbU4rtkl4tnrDzWxaOaqnyjq+vBevselEu6eGOk2K4roJKcTHRMmPN5oxeVweM2vgnRna90/iTtbm9P32nszM/EGFU6Tlzhqn3c1++xBw31t/0PJAAHexpbDwjnPPeyg1y4vXT28z0ZPs/DqnTjFdW+1v9+hQeVzcm98tBfs7g/D6kBp4OFoLv1+w/wAWM8mRJtRXTXc/Y8+eiMLFU8s5Lv06PVHfdf48+wUYW26l6iXYvf8Afobp5/a0XvJNrS6S8Ir7mV9U5/4ogACjjBRgH8a6P7k5Vs+N5Pp9UZbxTh/nDQG0KuXTkKKtm0c9WC5Xu+i1/TxIQ9S0xETMvVJWPoAdDxwAXC4Bn7Tw/wDOvH6Mzj0DMvGYLLrHVdnNfoPWUOSn7hGR7Wpp0pNrVap9jujv/X0vzxM3au0FNZIcOb7bcEjZnotKzlnU1dpd6NiMUlZaIxTSoYyLXxOz9DKn5qzPik+oXTqxk1GLu3wS4t9x6LZezMlpz+bkvy9/UeZwjWkzOFGysJuoa/M9Zd3YvD7loXC5KXXEYjD41cinGzsXXItq4BV6bi24vk1fR965ruI8vFu1HiNo0qfzTjfsTu/JGPtPbkJwlCEZaq2Z2XPkufoZOOwM6Ess1bsf8sl2xfMnFrwVjv1oAALsegwu2qdkpKUbJK9rrTpr6GjRxEJ/LJPo1fyPHFuzNm1K8rQVknrN/LH7vuRy2+JWfOmvW4ajmfdzNURgsMqUFBNu3Fybbb7WPuV4eL/HDARbSw+ZZlxXHvj+hbcLlZjJq2ms5h50i2nhHUUbcU37fdJG7jcF/NDxj9vsY8sbTTac1daPqSxMS7Nq3q8/Ww0oWuuKv4acezivMUa209oRlFxhrfi+VuxGSUjLkvWInEdut2+z9rU0cHTyx66+aQvDYpWtLR9vaPjXi7JNdiXfyRO0z46+ClK/lkw9HsTB5I5pL4pekeS+vkT7L2VZqdRdI/WX2Nq5tK/uS/I5on8agAuFyjjKzBmEZwzjYafmDMIzhnDAS4/ZFGtq45Zfmjo/HkzFr/hea+SpF/3Jxfpc9JnDOGA8p/tuv/x/939irD/hZ/8AsqJd0E36v7Hoc4ZwwCsBs+lQ+SOvOT1k/H6IszCM4ZwwD8wZhGcM4YB+YMwjOGcMB3XpxnFxnFST5NXRh4v8MU5a05uHc/iXhz9zZzhnDAeWn+Gay4Spv/6kvofaf4YqvjKmvGTflY9RnDOGAycH+GqUdZyc32fLHyWvqbdNKKSikkuCSSS6IVnDOGAfmDMIzhnDAPzBmEZwzhgH5iHH7MpV9Zx+L80dJefPxH5wzhgPO4j8Ly/kqRfdJNeqv7E3+26//H/3f2PV5wzhgPOUPwvJ/PUiv7U5ersbez9lUqGsY3l+aWsvDkvAozhnDAPzBmEZwzhgH5gzCM4ZwwCM4ZxGcM5TDT84ZydzIMTjG9FovcyejVpNmhVxsY87vsRPLaL5JeN2ZdWsoq7dvMkntNco+bt6C9ytrSvrc/iE+7yf3GQ2l2ryf0PP09p9sfJ39CyFVSV07oMTDYilvG9SxMZcH4cxmcwFIuwuMvpLjyfabCd+LHcNHOGcRnDONhI/OGcRnOKlbKGGxGVMqluLEyxi5K5DOq3xEYjFRpq78FzbEmfpWOOI9aLxcu71BYx93qecltid9Ixt33b8yiG14W1Uk+xa+NwxI/B6CGLT46DlMxaVdTV4u6HU6zjw8giftk8cfpqZwzk0KqaujrOPhLB+cM4jOGcMA/OKq4uMeevYiDE4zlHz+xJmGiqdr/TRltF8kvG7OP8AXz7vIhzHzeLjf1N1gm1mlHaL5peF0U0sXGXB69j4mLmDMGrYvMN/OGczMNjOUvB/csziaqxMSfnDOIzhnDDU+YMxPnBzKYa4xtf+VeP2JMwuVS7bPmYSYdNYxGC9oS+DxRl3LNoy0iuv79SG40V6S5PXVx2FxDg+7mie4G6kicN5TufcxBh6lkuhSpk8Opr4avmWvFcfuNzGThalpddC7OUiHPeMSoc7Ec6l3c+V6mlhGYW0GpH7OuYWNxGebfJaLoa0paM8+Fajkl1cLnNwuNhJfsyu4ytyfujXU7nnsL88eprRqWEtHa/H3VfSq2fuV5zKUyqjUujawS8ftXmJ8ZXsrLn7BnM+rUu2/wB2HiqN56d5hWIxKgr8+SPmYztoSvLwGmE61zLitXlPi/Dl5C7nNwuJhY6jXlDg/Dl5Grh8Spq/PmjEuPwk2peBsQW9estnMXYSvdWfFexlQqXG0alpIaap16lr5gzE+cM4mFk+c4rT+F9BOc5qS0fQtq2PScwZhOYMwmroyVj5fL4/QkuV4iOZd64ENxoqjf13cLnFz6jdSrKMvhQ2FSxPHQ+5ierqjzC+nU1T70aGcxKM9V1RpZxq1R5PXVeevgLznFaWovMZNW18PzGJOV2+rNTMZ2Lp5XpwfubFS2LuFzi4XG1IfhpWkjRzGfhYc+zgVZhLV7X4+oURqWKsPU4mbmKMLLiZWvY5PF8qmjIMw9yIcxWKuW8H5iHHfMn3D8xPjXojZqWvqe4XOLhcXVV3cbh+PgT3HUHxNipbeK1Ow+NS5FmPsZDYSbyqBnJs4ZxNV0+c+ZybeBvC2ofJOzsc5wqu5O6y7TNFIsozkdbSTCWJ7EKlO+oRVlpiXVxlFiLn2M7GzUtZxKvMGYnVU7jK/AXRbaFeF437PctzkdP4VY63g0VStOZPqS0FZznOKnO3FmTUVk/OKxLTi+4RLFLqJqYlvQNGzMObhc4uFzdSNCDskdZyKOI7hiroXRaLQpzlVKVkQ0nfoP3hsUJef0qzk1R2Z83hzUdxoqnMZGcXUpp9vmcZgzm6kKqwy9Bdyic9H0I7mang6EbjYxSOMwZjdSzMm5huH1ku7UlzFdH4V3hNRELc4ZyXeBvBdTpt4G8Jd4G8OjUKt4T1qd9V5HO8DeBqCWwuNlJPiLcF3hqHy4XDJ3nSiu8NQ+RV+BVRio9RKmfd4GoVbwN4S7wN4GoVbw5m01Zk+8DeBqHFSFuhxcdvDiSTDUOLhcMnefci7WGofLjKdO/HRHyNlyO94GoUxkloj7vCXeBvA1CreBvCXeBvA1B8ncTKrbjc+bw+OVw1ZhzOtc4ufXBd58yd4atdRqHUZ3OFBd4xStwDVmD6at1Gbwl3gbwNWqt4G8Jd4G8DUJN4G8EAdGoP3gbwQAag/eBvBABqD94G8EAGoP3gbwQAag/eBvBABqD94G8EAGoP3gbwQAag/eBvBABqD94G8EAGoP3gbwQAag/eBvBABqD94G8EAGoP3gbwQAag/eBvBABqD94G8EAGoP3gbwQAah//2Q=="
              }}
              style={{
                width: widthPercentageToDP("90%"),
                marginTop: 10,
                height: heightPercentageToDP("24"),
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "row",
                alignSelf: "center"
              }}
            >
              <View
                style={{
                  marginTop: 0,
                  width: widthPercentageToDP("100"),
                  backgroundColor: "none",
                  height: heightPercentageToDP("5")
                }}
              />
            </ImageBackground>
          </View>

          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
              }}
            >
              <View
                style={{
                  // flexDirection: "colomn",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Name
                </Text>
                <Input placeholder="Name" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Phone
                </Text>
                <Input placeholder="+93-3438582343" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Fields of Shop
                </Text>
                <Input placeholder="Field of Shop" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Services
                </Text>
                <Input placeholder="Services" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Time
                </Text>
                <Input placeholder="Time" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Location
                </Text>
                <Input placeholder="Location" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Bio
                </Text>
                <Input placeholder="Bio" />
              </View>
              <View
                style={{
                  // flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                    marginRight: 5
                  }}
                >
                  Coupon Discount
                </Text>
                <Input placeholder="Coupon Discount" />
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 4,
                  height: heightPercentageToDP("7"),
                  backgroundColor: "#f2f2f2",
                  width: widthPercentageToDP("97"),
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "tomato",
                  borderRadius: 3
                }}
                onPress={() => this.props.navigation.navigate("Photo")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      backgroundColor: "purple",
                      height: 40,
                      width: 40,
                      borderRadius: 30,
                      marginLeft: 10
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      marginLeft: 10,
                      fontSize: 16,
                      width: 150
                    }}
                  >
                    Photo
                  </Text>
                  <Icon
                    name="md-arrow-forward"
                    style={{
                      marginLeft: widthPercentageToDP("30"),
                      marginTop: 5
                    }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 4,
                  height: heightPercentageToDP("7"),
                  backgroundColor: "#f2f2f2",
                  width: widthPercentageToDP("97"),
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "tomato",
                  borderRadius: 3
                }}
                onPress={() => this.props.navigation.navigate("Location")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      backgroundColor: "purple",
                      height: 40,
                      width: 40,
                      borderRadius: 30,
                      marginLeft: 10
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      marginLeft: 10,
                      fontSize: 16,
                      width: 150
                    }}
                  >
                    Location
                  </Text>
                  <Icon
                    name="md-arrow-forward"
                    style={{
                      marginLeft: widthPercentageToDP("30"),
                      marginTop: 5
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Button
                style={{
                  backgroundColor: "tomato",
                  height: 40,
                  width: widthPercentageToDP("80 "),
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 90
                }}
                Text="Submit"
                TextStyle={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default FreelanceProfile;
