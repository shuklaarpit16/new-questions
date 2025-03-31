import json

with open("avatar.json", "r", encoding="utf-8") as f:
    avatars_data = json.load(f)

with open("avatar_voice.json", "r", encoding="utf-8") as f:
    voices_data = json.load(f)

avatars = avatars_data["data"]["avatars"]

voices = voices_data["data"]["voices"]

avatar_first_words = [entry["avatar_name"].split()[0] for entry in avatars if entry["avatar_name"].strip()]

voice_first_words = {entry["name"].split()[0] for entry in voices if entry["name"].strip()}

matching_words = [word for word in avatar_first_words if word in voice_first_words]

print(f"Number of matching first words: {len(matching_words)}")
print("Matching first words:", matching_words)



