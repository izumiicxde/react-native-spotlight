import { COLORS } from "@/constants/theme";
import { Id } from "@/convex/_generated/dataModel";
import { styles } from "@/styles/notification.styles";
import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
/**
 * 
 * parameter) notification: {
    _id: Id<"notification">;
    _creationTime: number;
    postId?: Id<"posts"> | undefined;
    commentId?: Id<"comments"> | undefined;
    type: "like" | "comment" | "follow";
    receiverId: Id<...>;
    senderId: Id<...>;
 */
type NotificationProps = {
  notification: {
    _id: Id<"notification">;
    _creationTime: number;
    postId?: Id<"posts">;
    commentId?: Id<"comments">;
    type: "like" | "comment" | "follow";
    receiverId: Id<"users">;
    senderId: Id<"users">;
    comment: string | undefined;
    post: {
      _id: Id<"posts">;
      _creationTime: number;
      caption?: string | undefined;
      userId: Id<"users">;
      imageUrl: string;
      storageId: string;
      likes: number;
      comments: number;
    } | null;
    sender: {
      _id: Id<"users">;
      username: string;
      image: string;
    };
  };
};
export const Notification = ({ notification }: NotificationProps) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <Link
          href={{
            pathname: "/user/[id]",
            params: { id: notification.sender._id },
          }}
          asChild
        >
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={notification.sender.image}
              style={styles.avatar}
              contentFit="cover"
              transition={200}
            />
            <View style={styles.iconBadge}>
              {notification.type === "like" ? (
                <Ionicons name="heart" size={14} color={COLORS.primary} />
              ) : notification.type === "follow" ? (
                <Ionicons name="person-add" size={14} color={"#8B5CF6"} />
              ) : (
                <Ionicons name="chatbubble" size={14} color={"#3B82F6"} />
              )}
            </View>
          </TouchableOpacity>
        </Link>

        <View style={styles.notificationInfo}>
          {/* /user/${notifications.sender._id} */}
          <Link href={`/notifications`} asChild>
            <TouchableOpacity>
              <Text style={styles.username}>
                {notification.sender.username}
              </Text>
            </TouchableOpacity>
          </Link>

          <Text style={styles.action}>
            {notification.type === "follow"
              ? "started following you"
              : notification.type === "like"
                ? "liked your post"
                : `commented: "${notification.comment}"`}
          </Text>
          <Text style={styles.timeAgo}>
            {formatDistanceToNow(notification._creationTime, {
              addSuffix: true,
            })}
          </Text>
        </View>
      </View>

      {notification.post && (
        <Image
          source={notification.post.imageUrl}
          style={styles.postImage}
          contentFit="cover"
          transition={200}
        />
      )}
    </View>
  );
};
